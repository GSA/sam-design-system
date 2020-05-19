import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteReadOnly} from './autocomplete-readonly.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyAutocompleteReadOnly],
  exports: [FormlyAutocompleteReadOnly],
  bootstrap: [FormlyAutocompleteReadOnly]
})
export class FormlyAutocompleteReadOnlyModule {}
