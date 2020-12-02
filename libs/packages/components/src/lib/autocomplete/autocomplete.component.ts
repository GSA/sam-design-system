import {
  Component,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef,
  forwardRef,
  HostListener,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl
} from '@angular/forms';
import { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';
import { SDSAutocompleteServiceInterface } from '../autocomplete-search/models/SDSAutocompleteServiceInterface';
import { SDSAutocompletelConfiguration } from './models/SDSAutocompletelConfiguration.model';
import { SelectionMode } from '../selected-result/models/sds-selected-item-model-helper';
import { SDSAutocompleteSearchComponent } from '../autocomplete-search/autocomplete-search.component';

const Autocomplete_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SDSAutocompleteComponent),
  multi: true
};

@Component({
  selector: 'sds-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [Autocomplete_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SDSAutocompleteComponent implements ControlValueAccessor {
  /**
   * Allow to insert a customized template for suggestions results
   */
  @Input() suggestionTemplate: TemplateRef<any>;

  /**
   * Allow to insert a customized template for selected items
   */
  @Input() selectedItemTemplate: TemplateRef<any>;

  /**
   * The data model that has the selected item
   */
  public model: SDSSelectedItemModel;

  public disabled: boolean;

  /**
   * Configuration for the control
   */
  @Input()
  public configuration: SDSAutocompletelConfiguration;

  /**
   * Model contain only the primary key, primary value, and secondary value.
   */
  @Input()
  public essentialModelFields: boolean = false;

  /**
   * Instance of the SamHiercarchicalServiceInterface provided
   */
  @Input()
  public service: SDSAutocompleteServiceInterface;

  @ViewChild('autocompleteSearch') autocompleteSearch: SDSAutocompleteSearchComponent;
  constructor(private cd: ChangeDetectorRef) { }

  /**
   * Stored Event for ControlValueAccessor
   */
  @HostListener('focusout')
  public onTouched = () => { };

  /**
   * Stored Event for ControlValueAccessor
   */
  public onChange = (_: any) => { };

  // ControlValueAccessor (and Formly) is trying to update the value of the FormControl (our custom component) programatically
  // If there is a value we will just overwrite items
  // If there is no value we reset the items array to be empty
  writeValue(value: any) {
    if (value instanceof SDSSelectedItemModel && value.items && value.items.length && this.model.items !== value.items) {
      this.model.items = [...value.items];
      this.cd.markForCheck();
    }
    else if(value && value.length && this.model.items !== value) {
      this.model.items = value;
      this.cd.markForCheck();
    } else {
      if(!this.model || !(this.model instanceof SDSSelectedItemModel)) {
        this.model = new SDSSelectedItemModel();
      }
      this.model.items = value && value.items ? value.items : [];
      this.cd.markForCheck();
    }

    this.autocompleteSearch.writeValue(this.model);
  }

  // Method that is fired when the child component event notifies us that the items array has been modified within the child component
  updateItems($event) {
    this.updateModel();
  }

  // Helper method that gets a new instance of the model and notifies ControlValueAccessor that we have a new model for this FormControl (our custom component)
  updateModel() {
    const model = this.getModel();
    this.onChange(model);
  }

  // Helper method to return a new instance of an array that contains our items
  getModel() {
    return [...this.model.items];
  }

  // ControlValueAccessor hook that lets us call this._onChange(var) to let the form know our variable has changed (in this case model)
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // ControlValueAccessor hook (not used)
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  isSingleMode(): boolean {
    if (this.configuration) {
      return this.configuration.selectionMode === SelectionMode.SINGLE;
    } else {
      return false;
    }
  }
  addItem(item: object) {
    this.autocompleteSearch.selectItem(item);
  }

  addItems(list: object[]) {
    list.forEach(item => {
      this.addItem(item);
    })
  }
}