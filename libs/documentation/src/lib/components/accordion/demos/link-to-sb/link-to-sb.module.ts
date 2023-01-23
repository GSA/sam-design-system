import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionLinkToSbComponent } from './link-to-sb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccordionLinkToSbComponent],
  exports: [AccordionLinkToSbComponent],
  bootstrap: [AccordionLinkToSbComponent],
})
export class AccordionLinkToSbModule { }
