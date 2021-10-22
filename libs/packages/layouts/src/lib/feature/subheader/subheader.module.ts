import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SdsMenuModule,
  SdsSearchModule,
  SdsObserversModule,
  SdsTruncateModule,
} from '@gsa-sam/components';
import {
  SdsSubheaderComponent,
  SdsSubheaderActionsComponent,
  SdsSubheaderDrawerComponent,
  SdsDrawerContentComponent
} from './subheader.component';
import { SdsSubheaderWrapperComponent } from './sds-subheader-wrapper.component';
import { SdsActionsMenuModule } from '../actions-menu/actions-menu.module';
import { SdsDrawerCommunicationService } from './drawer-communication.service';
import { NgxBootstrapIconsModule, threeDotsVertical, chevronLeft } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';
@NgModule({
  imports: [
    CommonModule,
    SdsMenuModule,
    SdsObserversModule,
    SdsSearchModule,
    SdsTruncateModule,
    SdsActionsMenuModule,
    IconModule,
    SdsButtonGroupModule,
    NgxBootstrapIconsModule.pick({threeDotsVertical, chevronLeft})

  ],
  exports: [
    SdsSubheaderComponent,
    SdsSubheaderActionsComponent,
    SdsSubheaderDrawerComponent,
    SdsDrawerContentComponent,
    SdsSubheaderWrapperComponent

  ],
  declarations: [
    SdsSubheaderComponent,
    SdsSubheaderActionsComponent,
    SdsSubheaderDrawerComponent,
    SdsDrawerContentComponent,
    SdsSubheaderWrapperComponent
  ],
  providers: [SdsDrawerCommunicationService]
})
export class SdsSubheaderModule {}
