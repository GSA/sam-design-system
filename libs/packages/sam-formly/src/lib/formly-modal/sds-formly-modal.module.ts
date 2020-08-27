import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsDialogModule } from '@gsa-sam/components';

import { SdsFormlyModule } from '../formly/formly.module';
import { SdsFormlyModalComponent } from './formly-modal.component';
import { SdsFiltersModule } from '../formly-filters/sds-filters.module';

@NgModule({
  declarations: [SdsFormlyModalComponent],
  imports: [
    CommonModule,
    SdsFiltersModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
    FormsModule
  ],
  entryComponents: [SdsFormlyModalComponent],
  exports: [SdsFormlyModalComponent]
})
export class SdsFormlyModalModule {}
