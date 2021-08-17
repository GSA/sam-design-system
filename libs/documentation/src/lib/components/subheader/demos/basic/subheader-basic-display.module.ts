import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';

import { SdsSearchModule, SdsDialogModule } from '@gsa-sam/components';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  SdsFormlyModule,
  SdsFormlyDialogModule
} from '@gsa-sam/sam-formly';
import { SubheaderBasicDisplayComponent } from './subheader-basic-display.component';
import { NgxBootstrapIconsModule, chevronLeft } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
    IconModule,
    SdsSearchModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
    NgxBootstrapIconsModule.pick({chevronLeft})
  ],
  declarations: [SubheaderBasicDisplayComponent],
  exports: [SubheaderBasicDisplayComponent],
  bootstrap: [SubheaderBasicDisplayComponent]
})
export class SubheaderBasicDisplayModule {}
