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
import { SdsSubheaderWrapperRequestComponent } from './sds-subheader-wrapper-request.component';
import { SdsButtonGroupModule } from 'libs/packages/sam-material-extensions/src/lib/button-group/button-group.module';
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
    SdsButtonGroupModule,
    FormsModule,
    NgxBootstrapIconsModule.pick({chevronLeft})
  ],
  declarations: [SdsSubheaderWrapperRequestComponent],
  exports: [SdsSubheaderWrapperRequestComponent],
  bootstrap: [SdsSubheaderWrapperRequestComponent]
})
export class SdsSubheaderRequestModule {}
