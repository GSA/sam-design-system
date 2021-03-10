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
import { SubheaderBasicDisplayComponent } from './subheader-basic-display.component';

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
    FormlyModule
  ],
  declarations: [SubheaderBasicDisplayComponent],
  exports: [SubheaderBasicDisplayComponent],
  bootstrap: [SubheaderBasicDisplayComponent]
})
export class SubheaderBasicDisplayModule {}
