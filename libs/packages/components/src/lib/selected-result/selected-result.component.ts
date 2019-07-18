import { Component, Input, TemplateRef, forwardRef } from '@angular/core';
import { SDSSelectedItemModel } from './models/sds-selectedItem.model';
import { SDSSelectedResultConfiguration } from './models/SDSSelectedResultConfiguration';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SDSSelectedItemModelHelper } from './models/sds-selected-item-model-helper';
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
      SDSSelectedItemModelHelper.removeItem(item, this.configuration.primaryKeyField, this.model.items);
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
}
