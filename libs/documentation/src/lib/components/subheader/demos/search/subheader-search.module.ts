import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';

import { SdsSearchModule, SdsDialogModule } from '@gsa-sam/components';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  SdsFormlyModule,
  SdsFormlyDialogModule
} from '@gsa-sam/sam-formly';
import { SubheaderSearchComponent } from './subheader-search.component';
import { NgxBootstrapIconsModule, chevronLeft } from 'ngx-bootstrap-icons';
import { IconModule } from 'ngx-uswds-icons';


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
    FormsModule,
    NgxBootstrapIconsModule.pick({chevronLeft})
  ],
  declarations: [SubheaderSearchComponent],
  exports: [SubheaderSearchComponent],
  bootstrap: [SubheaderSearchComponent]
})
export class SubheaderSearchModule {}
