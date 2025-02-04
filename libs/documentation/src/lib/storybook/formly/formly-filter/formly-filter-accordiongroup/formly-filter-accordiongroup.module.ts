import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFiltersModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterAccordionGroupComponent } from './formly-filter-accordiongroup.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, SdsFiltersModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterAccordionGroupComponent],
  exports: [FormlyFilterAccordionGroupComponent],
  bootstrap: [FormlyFilterAccordionGroupComponent],
})
export class FormlyFilterAccordionGroupModule {}
