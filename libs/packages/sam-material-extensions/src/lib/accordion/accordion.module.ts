import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsAccordionComponent, SdsAccordionItemComponent } from './accordion.component';
import { MAT_EXPANSION_PANEL_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  declarations: [SdsAccordionComponent, SdsAccordionItemComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    FontAwesomeModule
  ],
  exports: [SdsAccordionComponent, SdsAccordionItemComponent],
  providers: [
    {
        provide: MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
        useValue: {
            hideToggle: true
        }
    }
]
})
export class SdsAccordionModule { }
