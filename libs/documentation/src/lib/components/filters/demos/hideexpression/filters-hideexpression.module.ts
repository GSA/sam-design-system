import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersHideExpression } from './filters-hideexpression.component';
import { SdsFiltersModule, SdsFormlyDialogModule } from '@gsa-sam/sam-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {  SdsDialogModule } from '@gsa-sam/components';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  declarations: [FiltersHideExpression],
  imports: [
    CommonModule,
    SdsAccordionModule,
    FormsModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    SdsDialogModule,
    SdsFormlyDialogModule,
  ],
  exports: [FiltersHideExpression],
  bootstrap: [FiltersHideExpression]
})
export class FiltersHideExpressionModule {}
