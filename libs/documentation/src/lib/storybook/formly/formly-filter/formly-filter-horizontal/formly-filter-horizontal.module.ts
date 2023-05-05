import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFiltersModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterHorizontalComponent } from './formly-filter-horizontal.component';
import { SdsSearchModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, FormsModule, SdsFiltersModule, FormlyModule.forRoot(), ReactiveFormsModule, SdsSearchModule],
  declarations: [FormlyFilterHorizontalComponent],
  exports: [FormlyFilterHorizontalComponent],
  bootstrap: [FormlyFilterHorizontalComponent],
})
export class FormlyFilterHorizontalModule {}
