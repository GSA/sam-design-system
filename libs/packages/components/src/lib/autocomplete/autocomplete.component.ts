import { Component, Input, ViewChild, TemplateRef, ElementRef, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';
import { SDSAutocompleteServiceInterface } from '../autocomplete-search/models/SDSAutocompleteServiceInterface';
import { SDSAutocompletelConfiguration } from './models/SDSAutocompletelConfiguration.model';
import { SelectionMode } from '../selected-result/models/sds-selected-item-model-helper';
const Autocomplete_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SDSAutocompleteComponent),
  multi: true
};

@Component({
  selector: 'sds-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [Autocomplete_VALUE_ACCESSOR]
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


  /**
   * Stored Event for ControlValueAccessor
   */
  @HostListener('focusout')
  public onTouchedCallback: () => void = () => {

  };

  /**
   * Stored Event for ControlValueAccessor
   */
  public propogateChange: (_: any) => void = (_: any) => null;

  public disabled: boolean;


  /**
 * Configuration for the control
 */
  @Input()
  public configuration: SDSAutocompletelConfiguration;

  /**
* Instance of the SamHiercarchicalServiceInterface provided
*/
  @Input()
  public service: SDSAutocompleteServiceInterface;

  writeValue(obj: any): void {
    if (obj instanceof SDSSelectedItemModel) {
      this.model = obj as SDSSelectedItemModel;
    }
  }

  registerOnChange(fn: any): void {
    this.propogateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  isSingleMode(): boolean {
    if (this.configuration) {
      return this.configuration.selectionMode === SelectionMode.SINGLE;
    }
    else {
      return false;
    }
  }
}
