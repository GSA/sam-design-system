import { Component, Input, ViewChild, TemplateRef, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

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
