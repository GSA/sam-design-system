import {
  Component,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { SdsDialogService } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';
import { SdsFormlyDialogData } from '../../formly-dialog/formly-dialog-data.model';
import { SdsFormlyDialogComponent } from '../../formly-dialog/formly-dialog.component';
import { tap, startWith } from 'rxjs/operators';

@Component({
  selector: 'sds-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedFiltersComponent implements OnInit {
  /**
   * Pass in a Form Group for ReactiveForms Support
   */
  @Input() public form: UntypedFormGroup;

  /**
   *  Fields are used to configure the UI components
   */
  @Input() public fields: FormlyFieldConfig[];

  /**
   *  Model used to display the filter values.
   */
  @Input() public model: any;

  /**
   *    Options for the form.
   */
  @Input() public options: FormlyFormOptions = {};

  /**
   * Sort the filters by alphabetical order
   */
  @Input() public sortMoreFilterBy = '';

  /**
   * Show option to include inactive filter values
   */
  @Input() isInactiveValueFieldShown: boolean = false;

  /**
   * Defines whether additional filters should be displayed through a popover or
   * a modal
   */
  @Input() enablePopover = false;

  @Output() showInactiveFiltersChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  selectAll = false;
  showInactiveOnOpen = false;
  showInactive = false;
  popoverContent: FormlyFieldConfig[];

  readonly filtersFieldGroupKey = 'filters';

  constructor(
    public dialog: SdsDialogService,
    private advancedFiltersService: SdsAdvancedFiltersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (!this.enablePopover) {
      return;
    }
    this.popoverContent = this.getCheckboxFieldConfigs(true);
  }

  onSelectAllChange(selectAllValue, selectedform, isOnload, selectAllField) {
    const modalFields: FormlyFieldConfig[] = this.advancedFiltersService.convertToCheckboxes(this.fields);
    const keys = Object.keys(selectedform.get(this.filtersFieldGroupKey).controls);
    if (!isOnload) {
      this.selectAll = selectAllValue;
      keys.forEach((key) => {
        if (key !== 'selectAll' && key !== 'showInactive') {
          let currentField = modalFields.find((item) => item.key === key);
          if (currentField.key === key && currentField.type === 'checkbox') {
            selectedform.get(this.filtersFieldGroupKey).get(key).setValue(this.selectAll);
          } else if (currentField.type === 'multicheckbox') {
            const array = [];
            if (this.selectAll) {
              currentField.props.options.forEach((option: any) => {
                array.push(option.value);
                if (option.type === 'multicheckbox') {
                  option.props.options.forEach((option: any) => {
                    array.push(option.value);
                  });
                }
              });
              selectedform.get(this.filtersFieldGroupKey).get(key).setValue(array);

              this.cdr.detectChanges();
            } else {
              if (this.enablePopover) {
                selectedform.get(this.filtersFieldGroupKey).get(key).setValue(false);
              } else {
                selectedform.get(this.filtersFieldGroupKey).get(key).setValue([]);
              }
            }
          }
        }
      });
    } else {
      const allValues = [];
      keys.forEach((key) => {
        if (key !== 'selectAll') {
          let currentField = modalFields.find((item) => item.key === key);
          let val;
          if (Array.isArray(selectedform.get(this.filtersFieldGroupKey).get(key).value)) {
            val = selectedform.get(this.filtersFieldGroupKey).get(key).value.length > 0 ? true : false;
          } else {
            val = selectedform.get(this.filtersFieldGroupKey).get(key).value;
          }
          if (!allValues.includes(val)) {
            allValues.push(val);
          }
        }
      });

      allValues.length === 1
        ? selectedform.get('selectAll').setValue(allValues[0])
        : selectedform.get('selectAll').setValue(false);
      this.cdr.detectChanges();
    }
  }

  onShowInactiveChange(value) {
    this.showInactiveFiltersChange.emit(value);
  }

  openDialog(): void {
    const checkboxFieldConfigs = this.getCheckboxFieldConfigs();
    const data: SdsFormlyDialogData = {
      fields: checkboxFieldConfigs,
      submit: 'Update',
      title: 'More Filters',
    };

    const dialogRef: any = this.dialog.open(SdsFormlyDialogComponent, {
      width: 'medium',
      data: data,
    });

    dialogRef.componentInstance.submitFn.subscribe((result) => {
      if (result) {
        this.updateSelectedFields(result);
      }
      dialogRef.close();
    });

    dialogRef.componentInstance.onChangeFn.subscribe((result) => {
      if (
        result &&
        dialogRef.componentInstance.model['filterToggle']['selectAll'] !== undefined &&
        this.selectAll != result['filterToggle']['selectAll']
      ) {
        const newModel = {};
        this.selectAll = result['filterToggle']['selectAll'];
        const modalFields: FormlyFieldConfig[] = this.advancedFiltersService.convertToCheckboxes(this.fields);
        const keys = modalFields.map(function (el) {
          return el.key;
        });
        keys.forEach((key: string) => {
          if (key !== 'selectAll' && key !== 'showInactive') {
            let currentField = modalFields.find((item) => item.key === key);
            if (currentField.key === key && currentField.type === 'checkbox') {
              newModel[key] = this.selectAll;
            } else if (currentField.type === 'multicheckbox') {
              const array = [];
              if (this.selectAll) {
                currentField.props.options.forEach((option: any) => {
                  array.push(option.value);
                  if (option.type === 'multicheckbox') {
                    option.props.options.forEach((option: any) => {
                      array.push(option.value);
                    });
                  }
                });
                newModel[key] = array;
              } else {
                if (this.enablePopover) {
                  newModel[key] = false;
                } else {
                  newModel[key] = [];
                }
              }
            }
          }
        });

        const newFModel = { filterToggle: { filters: newModel, selectAll: result['filterToggle']['selectAll'] } };
        dialogRef.componentInstance.model = { ...dialogRef.componentInstance.model, ...newFModel };

        this.cdr.detectChanges();
      }
    });

    dialogRef.componentInstance.cancelFn.subscribe(() => {
      dialogRef.close();
    });
  }

  updateSelectedFields(result: any) {
    if (this.showInactiveOnOpen !== this.showInactive) {
      this.onShowInactiveChange(this.showInactive);
      this.showInactiveOnOpen = this.showInactive;
    }

    const response = this.advancedFiltersService.updateFields(result, this.fields, this.model);

    this.fields = response.fields;
    this.model = response.model;
  }

  getCheckboxFieldConfigs(hideChildrenGroups = false) {
    const modalFields: FormlyFieldConfig[] = this.advancedFiltersService.convertToCheckboxes(
      this.fields,
      hideChildrenGroups
    );
    if (this.sortMoreFilterBy) {
      modalFields.sort((a: FormlyFieldConfig, b: FormlyFieldConfig) =>
        a.props && b.props ? a.props[this.sortMoreFilterBy].localeCompare(b.props[this.sortMoreFilterBy]) : 0
      );
    }
    const filedGroup: FormlyFieldConfig[] = this.filedGroup;
    const showInactiveGroup: FormlyFieldConfig[] = this.showInactiveGroup;

    let updateField: FormlyFieldConfig[] = [
      {
        key: 'filterToggle',
        fieldGroup: [
          ...filedGroup,
          {
            key: this.filtersFieldGroupKey,
            fieldGroup: [...modalFields],
          },
        ],
      },
    ];
    if (this.isInactiveValueFieldShown) {
      updateField.push(...showInactiveGroup);
    }

    return updateField;
  }

  get filedGroup(): FormlyFieldConfig[] {
    return [
      {
        props: { label: 'test' },
        fieldGroup: [
          {
            key: 'selectAll',
            type: 'checkbox',
            props: {
              label: 'Select All',
              hideOptional: true,
              id: 'moreFilterSelectAll',
            },
          },
          {
            template: '<hr/>',
          },
        ],
      },
    ];
  }

  get showInactiveGroup(): FormlyFieldConfig[] {
    return [
      {
        template: '<hr/>',
      },
      {
        fieldGroup: [
          {
            key: 'showInactive',
            type: 'checkbox',
            defaultValue: this.showInactive,
            props: {
              label: 'Show Inactive Filter Values (Indicated by *)',
              hideOptional: true,
              id: 'moreFilterSelectAll',
              textAlignEnd: true,
            },
            hooks: {
              onInit: (field) => {
                let isOnload = true;
                const form = field.parent.formControl;
                form
                  .get('showInactive')
                  .valueChanges.pipe(
                    startWith(form.get('showInactive').value),
                    tap((showInactiveValue) => {
                      this.showInactive = showInactiveValue;
                      isOnload = false;
                    })
                  )
                  .subscribe();
              },
            },
          },
        ],
      },
    ];
  }
}
