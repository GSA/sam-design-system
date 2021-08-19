import { NgModule } from '@angular/core';
import { SdsLandingListModule } from '@gsa-sam/layouts';
import { BasicListComponent } from './basic-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SdsLandingListModule],
  declarations: [BasicListComponent],
  exports: [BasicListComponent],
  bootstrap: [BasicListComponent],
})
export class BasicListModule {}
