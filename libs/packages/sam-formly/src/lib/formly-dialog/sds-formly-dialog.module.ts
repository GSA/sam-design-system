import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsDialogModule } from '@gsa-sam/components';

import { SdsFormlyModule } from '../formly/formly.module';
import { SdsFormlyDialogComponent } from './formly-dialog.component';
import { SdsFiltersModule } from '../formly-filters/sds-filters.module';

@NgModule({
  declarations: [SdsFormlyDialogComponent],
  imports: [
    CommonModule,
    SdsFiltersModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
    FormsModule,
  ],
  entryComponents: [SdsFormlyDialogComponent],
  exports: [SdsFormlyDialogComponent],
})
export class SdsFormlyDialogModule {}
