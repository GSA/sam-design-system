import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersOptional } from './filters-optional.component';

import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  declarations: [FiltersOptional],
  imports: [
    CommonModule,
    FormsModule,
    SdsAccordionModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [FiltersOptional],
  bootstrap: [FiltersOptional],
})
export class FiltersOptionalModule {}
