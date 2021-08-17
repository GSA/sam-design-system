import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';
import { MatExpansionModule } from '@angular/material/expansion';
import { AccordionCardlist } from './accordion-cardlist.component';

@NgModule({
  declarations: [AccordionCardlist],
  imports: [
    CommonModule,
    SdsAccordionModule,
    MatExpansionModule
  ],
  exports: [AccordionCardlist],
  bootstrap: [AccordionCardlist]
})
export class AccordionCardlistModule {}

