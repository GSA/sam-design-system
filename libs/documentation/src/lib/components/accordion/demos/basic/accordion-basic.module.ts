import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionBasic } from './accordion-basic.component';
import { UsaAccordionModule } from '@gsa-sam/ngx-uswds';

@NgModule({
  declarations: [AccordionBasic],
  imports: [
    CommonModule,
    UsaAccordionModule,
  ],
  exports: [AccordionBasic],
  bootstrap: [AccordionBasic]
})
export class AccordionBasicModule {}

