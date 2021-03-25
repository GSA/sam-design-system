import { NgModule } from '@angular/core';

import { SdsActionsMenuComponent } from './actions-menu.component';
import { SdsIconModule, SdsMenuModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule, threeDotsVertical, x } from 'ngx-bootstrap-icons';


@NgModule({
  imports: [CommonModule, SdsIconModule, SdsMenuModule, NgxBootstrapIconsModule.pick({threeDotsVertical, x})],
  exports: [SdsActionsMenuComponent],
  declarations: [SdsActionsMenuComponent],
  providers: []
})
export class SdsActionsMenuModule {}
