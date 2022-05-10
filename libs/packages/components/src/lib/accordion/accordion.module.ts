import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { SdsAccordionDirective } from './accordion.directive';
import { SdsAccordionItemComponent } from './accordion-item.component';
import { SdsAccordionItemHeaderComponent } from './accordion-item-header.component';
import { SdsAccordionItemContentDirective } from './accordion-item-content.directive';

@NgModule({
  imports: [CommonModule, PortalModule],
  exports: [
    SdsAccordionDirective,
    SdsAccordionItemComponent,
    SdsAccordionItemHeaderComponent,
    SdsAccordionItemContentDirective,
  ],
  declarations: [
    SdsAccordionDirective,
    SdsAccordionItemComponent,
    SdsAccordionItemHeaderComponent,
    SdsAccordionItemContentDirective,
  ],
  providers: [],
})
export class SdsAccordionModule {}
