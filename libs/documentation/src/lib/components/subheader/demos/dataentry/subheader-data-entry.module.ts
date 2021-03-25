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
import { NgxBootstrapIconsModule, chevronLeft } from 'ngx-bootstrap-icons';

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
    NgxBootstrapIconsModule.pick({chevronLeft})

  ],
  declarations: [SubheaderDataEntryComponent],
  exports: [SubheaderDataEntryComponent],
  bootstrap: [SubheaderDataEntryComponent]
})
export class SubheaderDataEntryModule {}
