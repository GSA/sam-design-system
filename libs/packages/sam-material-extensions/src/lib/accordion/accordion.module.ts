import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsAccordionComponent } from './accordion.component';

@NgModule({
  declarations: [SdsAccordionComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    FontAwesomeModule
  ],
  exports: [SdsAccordionComponent]
})
export class SdsAccordionModule { }
