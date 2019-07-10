import { Component, Input, TemplateRef, forwardRef } from '@angular/core';
import { HierarchicalTreeSelectedItemModel } from '../hierarchical-tree-selectedItem.model';
import { SelectedResultConfiguration } from '../models/SamHierarchicalSelectedResultConfiguration';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
const Hierarchical_SelectedResult_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SDSSelectedResultComponent),
  multi: true
};

@Component({
  selector: 'sds-selected-result',
  templateUrl: './selected-result.component.html',
  styleUrls: ['./selected-result.component.scss'],
  providers: [Hierarchical_SelectedResult_VALUE_ACCESSOR]
})
export class SDSSelectedResultComponent implements ControlValueAccessor {

  /**
  * Allow to insert a customized template for suggestions to use
  */
  @Input() itemTemplate: TemplateRef<any>;

  /**
   * The data model that has the selected item
   */
  public model: HierarchicalTreeSelectedItemModel;

  /**
  * Configuration for the Selected Results control 
  */
  @Input()
  public configuration: SelectedResultConfiguration;

  /**
   * Stored Event for ControlValueAccessor
   */
  private onTouchedCallback: () => void = () => null;

  /**
   * Stored Event for ControlValueAccessor
   */
  private propogateChange: (_: any) => void = (_: any) => null;

  @Input()
  public disabled: boolean;

  /**
   * Removes item from the model
   * @param item 
   */
  removeItem(item: object) {
    if (!this.disabled) {
      this.model.removeItem(item, this.configuration.primaryKeyField);
      this.propogateChange(this.model);
      this.onTouchedCallback();
    }
  }

  writeValue(obj: any): void {
    if (obj instanceof HierarchicalTreeSelectedItemModel) {
      this.model = obj as HierarchicalTreeSelectedItemModel;
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
