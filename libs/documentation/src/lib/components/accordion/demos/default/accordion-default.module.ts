import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionDefault } from './accordion-default.component';
import { SdsAccordionModule } from '@gsa-sam/components';


@NgModule({
  declarations: [AccordionDefault],
  imports: [
    CommonModule,
    SdsAccordionModule
  ],
  exports: [AccordionDefault],
  bootstrap: [AccordionDefault]
})
export class AccordionDefaultModule {}
