import { NgModule } from '@angular/core';

import { SdsActionsMenuComponent } from './actions-menu.component';
import { SdsMenuModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule, threeDotsVertical, x } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';


@NgModule({
  imports: [CommonModule, IconModule, SdsMenuModule, NgxBootstrapIconsModule.pick({threeDotsVertical, x})],
  exports: [SdsActionsMenuComponent],
  declarations: [SdsActionsMenuComponent],
  providers: []
})
export class SdsActionsMenuModule {}
