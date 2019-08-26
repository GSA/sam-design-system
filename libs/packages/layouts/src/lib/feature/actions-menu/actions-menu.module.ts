import { NgModule } from '@angular/core';

import { SdsActionsMenuComponent } from './actions-menu.component';
import { SdsMenuModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, SdsMenuModule],
  exports: [SdsActionsMenuComponent],
  declarations: [SdsActionsMenuComponent],
  providers: []
})
export class SdsActionsMenuModule {}
