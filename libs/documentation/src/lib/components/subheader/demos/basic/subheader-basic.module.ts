import { NgModule } from '@angular/core';
import { SubHeaderBasic } from './subheader-basic.component';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsSearchModule, SdsDialogModule } from '@gsa-sam/components';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  SdsFormlyModule,
  SdsFormlyDialogModule
} from '@sam-design-system/sam-formly';

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
    FormlyModule
  ],
  declarations: [SubHeaderBasic],
  exports: [SubHeaderBasic],
  bootstrap: [SubHeaderBasic]
})
export class SubHeaderBasicModule {}
