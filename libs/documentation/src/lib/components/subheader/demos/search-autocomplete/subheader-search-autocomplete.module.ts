import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import {
  SdsSearchModule,
  SdsDialogModule,
  SdsAutocompleteModule,
} from '@gsa-sam/components';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule, SdsFormlyDialogModule } from '@gsa-sam/sam-formly';
import { SubheaderSearchAutocompleteComponent } from './subheader-search-autocomplete.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
    SdsSearchModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
    IconModule,
    SdsAutocompleteModule,
    FormsModule,
  ],
  declarations: [SubheaderSearchAutocompleteComponent],
  exports: [SubheaderSearchAutocompleteComponent],
  bootstrap: [SubheaderSearchAutocompleteComponent],
})
export class SubheaderSearchAutocompleteModule { }
