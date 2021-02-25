import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  SdsSearchModule,
  SdsDialogModule,
  SdsIconModule,
  SdsAutocompleteModule,
} from '@gsa-sam/components';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule, SdsFormlyDialogModule } from '@gsa-sam/sam-formly';
import { SubheaderSearchAutocompleteComponent } from './subheader-search-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
    FontAwesomeModule,
    SdsSearchModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
    SdsIconModule,
    SdsAutocompleteModule,
    FormsModule,
  ],
  declarations: [SubheaderSearchAutocompleteComponent],
  exports: [SubheaderSearchAutocompleteComponent],
  bootstrap: [SubheaderSearchAutocompleteComponent],
})
export class SubheaderSearchAutocompleteModule {}
