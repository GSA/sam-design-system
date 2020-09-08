import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionBasic } from './accordion-basic.component';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [AccordionBasic],
  imports: [
    CommonModule,
    SdsAccordionModule,
    MatExpansionModule
  ],
  exports: [AccordionBasic],
  bootstrap: [AccordionBasic]
})
export class AccordionBasicModule {}

