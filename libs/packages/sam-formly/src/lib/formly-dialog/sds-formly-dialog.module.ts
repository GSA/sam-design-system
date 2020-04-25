import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule, SdsDialogModule } from '@gsa-sam/components';

import { SdsFormlyModule } from '../formly/formly.module';
import { SdsFormlyDialogComponent } from './formly-dialog.component';
import { SdsFiltersModule } from '../formly-filters/sds-filters.module';


@NgModule({
  declarations: [SdsFormlyDialogComponent],
  imports: [
    CommonModule,
    SdsFiltersModule,
    SdsAccordionModule,
    SdsDialogModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormsModule
  ],
  entryComponents: [SdsFormlyDialogComponent],
  exports: [SdsFormlyDialogComponent]
})
export class SdsFormlyDialogModule {}
