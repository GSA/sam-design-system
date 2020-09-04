import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersHideExpression } from './filters-hideexpression.component';
import { SdsFiltersModule } from '@sam-design-system/sam-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule } from '@gsa-sam/components';

@NgModule({
  declarations: [FiltersHideExpression],
  imports: [
    CommonModule,
    FormsModule,
    SdsAccordionModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [FiltersHideExpression],
  bootstrap: [FiltersHideExpression]
})
export class FiltersHideExpressionModule {}
