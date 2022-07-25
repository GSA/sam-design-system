import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsSearchModule } from '@gsa-sam/components';
import { HorizontalFilterDemo } from './horizontal-filter.component';
@NgModule({
  declarations: [HorizontalFilterDemo],
  imports: [
    CommonModule,
    FormsModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    SdsSearchModule,
  ],
  exports: [HorizontalFilterDemo],
  bootstrap: [HorizontalFilterDemo],
})
export class HorizontalFilterModule {}
