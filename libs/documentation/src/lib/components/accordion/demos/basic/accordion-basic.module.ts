import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionBasic } from './accordion-basic.component';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';




@NgModule({
  declarations: [AccordionBasic],
  imports: [
    CommonModule,
    SdsAccordionModule
  ],
  exports: [AccordionBasic],
  bootstrap: [AccordionBasic]
})
export class AccordionBasicModule {}
