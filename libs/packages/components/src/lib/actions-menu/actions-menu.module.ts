import { NgModule } from '@angular/core';

import { SdsActionsMenuComponent } from './actions-menu.component';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule, threeDotsVertical, x } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { SdsMenuModule } from '../menu/menu.module';

@NgModule({
  imports: [CommonModule, IconModule, SdsMenuModule, NgxBootstrapIconsModule.pick({ threeDotsVertical, x })],
  exports: [SdsActionsMenuComponent],
  declarations: [SdsActionsMenuComponent],
  providers: [],
})
export class SdsActionsMenuModule {}
