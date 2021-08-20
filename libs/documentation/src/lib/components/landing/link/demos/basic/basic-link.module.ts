import { NgModule } from '@angular/core';
import { SdsLandingLinkModule } from '@gsa-sam/layouts';
import { BasicLinkComponent } from './basic-link.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SdsLandingLinkModule],
  declarations: [BasicLinkComponent],
  exports: [BasicLinkComponent],
  bootstrap: [BasicLinkComponent],
})
export class BasicLinkModule {}
