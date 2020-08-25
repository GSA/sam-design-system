import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { MatTableModule, MatSortModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsAccordionComponent } from './accordion.component';

@NgModule({
  declarations: [SdsAccordionComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [SdsAccordionComponent]
})
export class SdsAccordionModule { }
