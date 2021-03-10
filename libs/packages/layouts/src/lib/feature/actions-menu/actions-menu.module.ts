import { NgModule } from '@angular/core';

import { SdsActionsMenuComponent } from './actions-menu.component';
import { SdsIconModule, SdsMenuModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, SdsIconModule, SdsMenuModule],
  exports: [SdsActionsMenuComponent],
  declarations: [SdsActionsMenuComponent],
  providers: []
})
export class SdsActionsMenuModule {}
