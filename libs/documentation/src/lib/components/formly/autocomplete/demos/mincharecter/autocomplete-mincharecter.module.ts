import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyAutocompleteMinCharecter} from './autocomplete-mincharecter.component';
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
  declarations: [FormlyAutocompleteMinCharecter],
  exports: [FormlyAutocompleteMinCharecter],
  bootstrap: [FormlyAutocompleteMinCharecter]
})
export class FormlyAutocompleteMinCharecterModule {}
