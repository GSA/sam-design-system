import { Component as StubComponent, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { SdsDialogService, SdsPopoverModule } from '@gsa-sam/components';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { AdvancedFiltersComponent } from './advanced-filters.component';
import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';

@StubComponent({
  selector: 'usa-icon',
  template: '',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: any;
}

describe('AdvancedFiltersComponent', () => {
  let component: AdvancedFiltersComponent;
  let fixture: ComponentFixture<AdvancedFiltersComponent>;
  let modalServiceSpy: { open: ReturnType<typeof vi.fn> };
  let advancedFiltersService: SdsAdvancedFiltersService;

  let submitSubject: Subject<any>;
  let onChangeSubject: Subject<any>;
  let cancelSubject: Subject<any>;
  let fakeDialogRef: any;

  beforeEach(() => {
    submitSubject = new Subject<any>();
    onChangeSubject = new Subject<any>();
    cancelSubject = new Subject<any>();

    fakeDialogRef = {
      componentInstance: {
        submitFn: submitSubject.asObservable(),
        onChangeFn: onChangeSubject.asObservable(),
        cancelFn: cancelSubject.asObservable(),
        model: { filterToggle: { selectAll: false, filters: {} } },
      },
      close: vi.fn(),
    };

    modalServiceSpy = {
      open: vi.fn().mockReturnValue(fakeDialogRef),
    };

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SdsPopoverModule],
      declarations: [AdvancedFiltersComponent, UsaIconStubComponent],
      providers: [{ provide: SdsDialogService, useValue: modalServiceSpy }, SdsAdvancedFiltersService],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedFiltersComponent);
    component = fixture.componentInstance;
    advancedFiltersService = TestBed.inject(SdsAdvancedFiltersService);

    component.fields = [
      {
        key: 'keyword',
        type: 'input',
        props: { label: 'Keyword Filter' },
      },
      {
        key: 'statusGroup',
        props: { label: 'Status' },
        fieldGroup: [
          { key: 'active', props: { label: 'Active' } },
          { key: 'inactive', props: { label: 'Inactive' } },
        ],
      },
    ];
    component.model = {
      keyword: 'test',
      statusGroup: { active: true, inactive: false },
    };
    component.form = new UntypedFormGroup({});
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should not initialize popoverContent when enablePopover is false', () => {
      component.enablePopover = false;
      component.ngOnInit();
      expect(component.popoverContent).toBeUndefined();
    });

    it('should initialize popoverContent when enablePopover is true', () => {
      component.enablePopover = true;
      component.ngOnInit();
      expect(component.popoverContent).toBeDefined();
      expect(component.popoverContent[0].key).toBe('filterToggle');
    });
  });

  describe('getCheckboxFieldConfigs', () => {
    it('should sort modal fields when sortMoreFilterBy is provided', () => {
      component.sortMoreFilterBy = 'label';
      component.fields = [
        { key: 'zField', type: 'input', props: { label: 'Zebra' } },
        { key: 'aField', type: 'input', props: { label: 'Apple' } },
      ];

      const configs = component.getCheckboxFieldConfigs();
      const filterGroup = configs[0].fieldGroup.find((fg) => fg.key === 'filters');
      expect(filterGroup.fieldGroup[0].props.label).toBe('Apple');
      expect(filterGroup.fieldGroup[1].props.label).toBe('Zebra');
    });

    it('should handle sortMoreFilterBy when a field lacks props', () => {
      component.sortMoreFilterBy = 'label';
      component.fields = [{ key: 'noPropsField' }, { key: 'hasPropsField', props: { label: 'Beta' } }];

      const configs = component.getCheckboxFieldConfigs();
      const filterGroup = configs[0].fieldGroup.find((fg) => fg.key === 'filters');
      expect(filterGroup.fieldGroup.length).toBe(2);
    });

    it('should include showInactiveGroup when isInactiveValueFieldShown is true', () => {
      component.isInactiveValueFieldShown = true;
      const configs = component.getCheckboxFieldConfigs();

      expect(configs.length).toBe(3); // filterToggle, <hr/>, showInactive group
      const inactiveConfig = configs[2].fieldGroup[0];
      expect(inactiveConfig.key).toBe('showInactive');
    });

    it('should hook onInit to update showInactive on valueChanges', () => {
      component.isInactiveValueFieldShown = true;
      const configs = component.getCheckboxFieldConfigs();
      const showInactiveField = configs[2].fieldGroup[0];

      const testFormGroup = new UntypedFormGroup({
        showInactive: new UntypedFormControl(false),
      });

      const parentMock = { formControl: testFormGroup };
      const fieldMock = { ...showInactiveField, parent: parentMock };

      showInactiveField.hooks.onInit(fieldMock as any);
      expect(component.showInactive).toBe(false);

      testFormGroup.get('showInactive').setValue(true);
      expect(component.showInactive).toBe(true);
    });
  });

  describe('onShowInactiveChange', () => {
    it('should emit showInactiveFiltersChange event', () => {
      const emitSpy = vi.spyOn(component.showInactiveFiltersChange, 'emit');
      component.onShowInactiveChange(true);
      expect(emitSpy).toHaveBeenCalledWith(true);
      component.onShowInactiveChange(false);
      expect(emitSpy).toHaveBeenCalledWith(false);
    });
  });

  describe('onSelectAllChange', () => {
    let selectedForm: UntypedFormGroup;

    beforeEach(() => {
      selectedForm = new UntypedFormGroup({
        selectAll: new UntypedFormControl(false),
        filters: new UntypedFormGroup({
          keyword: new UntypedFormControl(false),
          statusGroup: new UntypedFormControl([]),
        }),
      });
    });

    it('should set all checkbox and multicheckbox controls to true when selectAllValue is true (isOnload = false)', () => {
      component.onSelectAllChange(true, selectedForm, false, null);

      expect(component.selectAll).toBe(true);
      expect(selectedForm.get('filters').get('keyword').value).toBe(true);
      expect(selectedForm.get('filters').get('statusGroup').value).toEqual(['active', 'inactive']);
    });

    it('should set all controls to false / empty when selectAllValue is false (isOnload = false, enablePopover = false)', () => {
      component.enablePopover = false;
      component.onSelectAllChange(false, selectedForm, false, null);

      expect(component.selectAll).toBe(false);
      expect(selectedForm.get('filters').get('keyword').value).toBe(false);
      expect(selectedForm.get('filters').get('statusGroup').value).toEqual([]);
    });

    it('should set multicheckbox controls to false when selectAllValue is false and enablePopover is true', () => {
      component.enablePopover = true;
      component.onSelectAllChange(false, selectedForm, false, null);

      expect(component.selectAll).toBe(false);
      expect(selectedForm.get('filters').get('statusGroup').value).toBe(false);
    });

    it('should collect nested multicheckbox options when selecting all', () => {
      component.fields = [
        {
          key: 'topGroup',
          props: { label: 'Top Group' },
          fieldGroup: [
            { key: 'opt1', props: { label: 'Option 1' } },
            {
              key: 'nestedGroup',
              props: { label: 'Nested' },
              fieldGroup: [{ key: 'nestedOpt', props: { label: 'Nested Option' } }],
            },
          ],
        },
      ];

      const customForm = new UntypedFormGroup({
        selectAll: new UntypedFormControl(false),
        filters: new UntypedFormGroup({
          topGroup: new UntypedFormControl([]),
        }),
      });

      component.onSelectAllChange(true, customForm, false, null);
      // Nested multicheckbox options push option.value (undefined for nested groups) and child values
      expect(customForm.get('filters').get('topGroup').value).toEqual(['opt1', undefined, 'nestedOpt']);
    });

    it('should evaluate selectAll as true when all values are true on load (isOnload = true)', () => {
      selectedForm.get('filters').get('keyword').setValue(true);
      selectedForm.get('filters').get('statusGroup').setValue(['active']);

      component.onSelectAllChange(null, selectedForm, true, null);
      expect(selectedForm.get('selectAll').value).toBe(true);
    });

    it('should evaluate selectAll as false when values are mixed on load (isOnload = true)', () => {
      selectedForm.get('filters').get('keyword').setValue(false);
      selectedForm.get('filters').get('statusGroup').setValue(['active']);

      component.onSelectAllChange(null, selectedForm, true, null);
      expect(selectedForm.get('selectAll').value).toBe(false);
    });

    it('should evaluate selectAll as false when all values are false / empty on load (isOnload = true)', () => {
      selectedForm.get('filters').get('keyword').setValue(false);
      selectedForm.get('filters').get('statusGroup').setValue([]);

      component.onSelectAllChange(null, selectedForm, true, null);
      expect(selectedForm.get('selectAll').value).toBe(false);
    });
  });

  describe('openDialog', () => {
    it('should open dialog with proper configuration', () => {
      component.openDialog();
      expect(modalServiceSpy.open).toHaveBeenCalled();
    });

    it('should handle submitFn with valid result', () => {
      const updateSpy = vi.spyOn(component, 'updateSelectedFields');
      component.openDialog();

      const result = {
        filterToggle: {
          filters: {
            keyword: true,
            statusGroup: ['active'],
          },
        },
      };

      submitSubject.next(result);

      expect(updateSpy).toHaveBeenCalledWith(result);
      expect(fakeDialogRef.close).toHaveBeenCalled();
    });

    it('should handle submitFn with null result', () => {
      const updateSpy = vi.spyOn(component, 'updateSelectedFields');
      component.openDialog();

      submitSubject.next(null);

      expect(updateSpy).not.toHaveBeenCalled();
      expect(fakeDialogRef.close).toHaveBeenCalled();
    });

    it('should handle cancelFn', () => {
      component.openDialog();
      cancelSubject.next(undefined);
      expect(fakeDialogRef.close).toHaveBeenCalled();
    });

    it('should handle onChangeFn when selectAll is toggled in dialog', () => {
      component.selectAll = false;
      component.openDialog();

      const changeEvent = {
        filterToggle: {
          selectAll: true,
        },
      };

      onChangeSubject.next(changeEvent);

      expect(component.selectAll).toBe(true);
      expect(fakeDialogRef.componentInstance.model.filterToggle.selectAll).toBe(true);
      expect(fakeDialogRef.componentInstance.model.filterToggle.filters.keyword).toBe(true);
      expect(fakeDialogRef.componentInstance.model.filterToggle.filters.statusGroup).toEqual(['active', 'inactive']);
    });

    it('should handle onChangeFn when selectAll is toggled to false (with enablePopover = true)', () => {
      component.selectAll = true;
      component.enablePopover = true;
      fakeDialogRef.componentInstance.model.filterToggle.selectAll = false;
      component.openDialog();

      const changeEvent = {
        filterToggle: {
          selectAll: false,
        },
      };

      onChangeSubject.next(changeEvent);

      expect(component.selectAll).toBe(false);
      expect(fakeDialogRef.componentInstance.model.filterToggle.filters.keyword).toBe(false);
      expect(fakeDialogRef.componentInstance.model.filterToggle.filters.statusGroup).toBe(false);
    });

    it('should handle onChangeFn with nested multicheckboxes', () => {
      component.fields = [
        {
          key: 'level1',
          props: { label: 'Level 1' },
          fieldGroup: [
            {
              key: 'level2',
              props: { label: 'Level 2' },
              fieldGroup: [{ key: 'level3', props: { label: 'Level 3' } }],
            },
          ],
        },
      ];
      component.selectAll = false;
      component.openDialog();

      onChangeSubject.next({
        filterToggle: { selectAll: true },
      });

      expect(fakeDialogRef.componentInstance.model.filterToggle.filters.level1).toEqual([undefined, 'level3']);
    });
  });

  describe('updateSelectedFields', () => {
    it('should emit showInactiveFiltersChange when showInactive status has changed', () => {
      const emitSpy = vi.spyOn(component.showInactiveFiltersChange, 'emit');
      component.showInactiveOnOpen = false;
      component.showInactive = true;

      const result = {
        filterToggle: {
          filters: {
            keyword: true,
            statusGroup: ['active'],
          },
        },
      };

      component.updateSelectedFields(result);

      expect(emitSpy).toHaveBeenCalledWith(true);
      expect(component.showInactiveOnOpen).toBe(true);
    });

    it('should update fields and model via advancedFiltersService', () => {
      const updateFieldsSpy = vi.spyOn(advancedFiltersService, 'updateFields');
      const result = {
        filterToggle: {
          filters: {
            keyword: false,
            statusGroup: ['active'],
          },
        },
      };

      component.updateSelectedFields(result);

      expect(updateFieldsSpy).toHaveBeenCalledWith(result, component.fields, component.model);
      expect(component.fields[0].hide).toBe(true);
      expect(component.model.keyword).toBeNull();
    });
  });
});
