import { NgModule } from '@angular/core';
import { SdsLandingListModule } from '@gsa-sam/layouts';
import { LinksListComponent } from './links-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SdsLandingListModule],
  declarations: [LinksListComponent],
  exports: [LinksListComponent],
  bootstrap: [LinksListComponent],
})
export class LinksListModule {}
