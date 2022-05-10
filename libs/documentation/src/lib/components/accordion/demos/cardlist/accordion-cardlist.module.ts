import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionCardlist } from './accordion-cardlist.component';
import { UsaAccordionModule } from '@gsa-sam/ngx-uswds';

@NgModule({
  declarations: [AccordionCardlist],
  imports: [CommonModule, UsaAccordionModule],
  exports: [AccordionCardlist],
  bootstrap: [AccordionCardlist],
})
export class AccordionCardlistModule {}
