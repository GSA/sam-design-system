import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';

import { SdsSearchModule, SdsDialogModule, SdsIconModule } from '@gsa-sam/components';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  SdsFormlyModule,
  SdsFormlyDialogModule
} from '@gsa-sam/sam-formly';
import { SubheaderDataEntryComponent } from './subheader-data-entry.component';


@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
    SdsIconModule,
    SdsSearchModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
    // FormlyModule,
  
  ],
  declarations: [SubheaderDataEntryComponent],
  exports: [SubheaderDataEntryComponent],
  bootstrap: [SubheaderDataEntryComponent]
})
export class SubheaderDataEntryModule {}
