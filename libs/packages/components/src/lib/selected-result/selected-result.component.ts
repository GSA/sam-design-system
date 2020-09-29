import { Component, Input, TemplateRef, forwardRef } from '@angular/core';
import { SDSSelectedItemModel } from './models/sds-selectedItem.model';
import { SDSSelectedResultConfiguration } from './models/SDSSelectedResultConfiguration';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SDSSelectedItemModelHelper } from './models/sds-selected-item-model-helper';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
const SDS_SelectedResult_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SDSSelectedResultComponent),
  multi: true
};

@Component({
  selector: 'sds-selected-result',
  templateUrl: './selected-result.component.html',
  styleUrls: ['./selected-result.component.scss'],
  providers: [SDS_SelectedResult_VALUE_ACCESSOR]
})
export class SDSSelectedResultComponent implements ControlValueAccessor {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, sds);
  }

  /**
  * Allow to insert a customized template for suggestions to use
  */
  @Input() itemTemplate: TemplateRef<any>;

  /**
   * The data model that has the selected item
   */
  public model: SDSSelectedItemModel;


  /**
  * Configuration for the Selected Results control 
  */
  @Input()
  public configuration: SDSSelectedResultConfiguration;

  /**
   * Stored Event for ControlValueAccessor
   */
  public onTouchedCallback: () => void = () => null;

  /**
   * Stored Event for ControlValueAccessor
   */
  public propogateChange: (_: any) => void = (_: any) => null;

  @Input()
  public disabled: boolean;

  /**
   * Removes item from the model
   * @param item 
   */
  removeItem(item: object) {
    if (!this.disabled) {
      SDSSelectedItemModelHelper.removeItem(item, this.configuration.primaryKeyField, this.model);
      this.propogateChange(this.model);
      this.onTouchedCallback();
    }
  }

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


  /**
   * Gets the string value from the specifed properties of an object
   * @param object 
   * @param propertyFields comma seperated list with periods depth of object
   */
  getObjectValue(object: Object, propertyFields: string): string {
    let value = '';
    let current = object;
    let fieldSplit = propertyFields.split(',');
    for (let i = 0; i < fieldSplit.length; i++) {
      let fieldValue = fieldSplit[i];
      let fieldPartSplit = fieldValue.split('.');
      for (let j = 0; j < fieldPartSplit.length; j++) {
        let fieldCheckValue = fieldPartSplit[j];
        if (current) {
          current = current[fieldCheckValue];
        }
      }

      if (current) {
        value += current.toString() + ' ';
      }
      current = object;
    }
    return value.trim();
  }

}
