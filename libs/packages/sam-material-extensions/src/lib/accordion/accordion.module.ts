import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS } from '@angular/material/expansion';


import { SdsAccordionComponent, SdsAccordionItemComponent, SdsAccordionTitleDirective, SdsAccordionContentDirective } from './accordion.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [SdsAccordionComponent, SdsAccordionItemComponent, SdsAccordionTitleDirective, SdsAccordionContentDirective],
  imports: [
    CommonModule,
    MatExpansionModule,
    IconModule
  ],
  exports: [SdsAccordionComponent, SdsAccordionItemComponent, SdsAccordionTitleDirective, SdsAccordionContentDirective],
  providers: [
    {
      provide: MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
      useValue: {
        collapsedHeight: '45px',
        expandedHeight: '45px',
        hideToggle: true
      }
    }
  ]
})
export class SdsAccordionModule { }
