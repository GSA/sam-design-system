import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteMinCharecter} from './autocomplete-mincharecter.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyAutocompleteMinCharecter],
  exports: [FormlyAutocompleteMinCharecter],
  bootstrap: [FormlyAutocompleteMinCharecter]
})
export class FormlyAutocompleteMinCharecterModule {}
