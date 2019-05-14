import { Component, Input, ViewChild, TemplateRef, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { SamHiercarchicalServiceInterface } from '../hierarchical-interface';
import { KeyHelper, KEYS } from '../../../utilities/key-helper/key-helper';
import { HierarchicalTreeSelectedItemModel, TreeMode } from '../hierarchical-tree-selectedItem.model';
import { SamHierarchicalAutocompleteConfiguration } from '../models/SamHierarchicalAutocompleteConfiguration';
const Hierarchical_Autocomplete_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SamHierarchicalAutocompleteComponent),
  multi: true
};

@Component({
  selector: 'sds-hierarchical-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [Hierarchical_Autocomplete_VALUE_ACCESSOR]
})
export class SamHierarchicalAutocompleteComponent implements ControlValueAccessor {
  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }


  
}
