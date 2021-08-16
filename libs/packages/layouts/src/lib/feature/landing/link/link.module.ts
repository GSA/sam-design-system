import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SdsLandingLinkComponent } from './link.component';

@NgModule({
  declarations: [SdsLandingLinkComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SdsLandingLinkComponent]
})
export class SdsLandingLinkModule { }
