import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FiltersConfig } from './filter-config.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  SdsFiltersModule,
  SdsFormlyDialogModule,
  SdsFormlyModule
} from '@gsa-sam/sam-formly';
import { SdsDialogModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SdsFiltersModule,
    SdsFormlyDialogModule,
    FormlyModule.forRoot(),
    SdsFormlyModule,
    SdsDialogModule,
    SdsFormlyDialogModule,
  ],
  declarations: [FiltersConfig],
  exports: [FiltersConfig],
  bootstrap: [FiltersConfig]
})
export class FiltersConfigModule {}
