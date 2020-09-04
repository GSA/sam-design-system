import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersBasic } from './filters-basic.component';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule } from '@gsa-sam/components';


@NgModule({
  declarations: [FiltersBasic],
  imports: [
    CommonModule,
        FormsModule,
        SdsAccordionModule,
        SdsFiltersModule,
        FormlyModule.forRoot(),
        ReactiveFormsModule
  ],
  exports: [FiltersBasic],
  bootstrap: [FiltersBasic]
})
export class FiltersBasicModule {}
