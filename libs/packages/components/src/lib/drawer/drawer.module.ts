import { NgModule } from '@angular/core';

import { SdsDrawerComponent } from './drawer.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [SdsDrawerComponent],
  declarations: [SdsDrawerComponent],
  providers: []
})
export class SdsDrawerModule {}
