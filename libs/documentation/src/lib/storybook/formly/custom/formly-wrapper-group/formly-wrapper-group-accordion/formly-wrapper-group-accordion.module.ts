import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperGroupAccordionComponent } from './formly-wrapper-group-accordion.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperGroupAccordionComponent],
  exports: [FormlyWrapperGroupAccordionComponent],
  bootstrap: [FormlyWrapperGroupAccordionComponent],
})
export class FormlyWrapperGroupAccordionModule {}
