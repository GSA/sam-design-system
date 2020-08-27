import { NgModule } from '@angular/core';
import { SubHeaderBasic } from './subheader-basic.component';
import {
  SdsSubheaderModule,
  SdsDownloadModule
} from '@sam-design-system/layouts';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsSearchModule, SdsDialogModule } from '@gsa-sam/components';
import {
  SdsFormlyDialogModule,
  SdsFormlyModule
} from '@sam-design-system/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
    FontAwesomeModule,
    SdsSearchModule,
    SdsDownloadModule,
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
