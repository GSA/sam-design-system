import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { AccordionWrapperBasic } from './accordionwrapper-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [AccordionWrapperBasic],
  exports: [AccordionWrapperBasic],
  bootstrap: [AccordionWrapperBasic]
})
export class AccordionWrapperBasicModule {}
