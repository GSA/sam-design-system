import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteReadOnly} from './autocomplete-readonly.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFiltersModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyAutocompleteReadOnly],
  exports: [FormlyAutocompleteReadOnly],
  bootstrap: [FormlyAutocompleteReadOnly]
})
export class FormlyAutocompleteReadOnlyModule {}
