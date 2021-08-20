import { NgModule } from '@angular/core';
import { SdsLandingListModule } from '@gsa-sam/layouts';
import { IconsListComponent } from './icons-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SdsLandingListModule],
  declarations: [IconsListComponent],
  exports: [IconsListComponent],
  bootstrap: [IconsListComponent],
})
export class IconsListModule {}
