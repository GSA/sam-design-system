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
import { SdsActionsMenuModule } from '@gsa-sam/components';
import { SdsDrawerCommunicationService } from './drawer-communication.service';
import { NgxBootstrapIconsModule, threeDotsVertical } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [
    CommonModule,
    SdsMenuModule,
    SdsObserversModule,
    SdsSearchModule,
    SdsTruncateModule,
    SdsActionsMenuModule,
    IconModule,
    NgxBootstrapIconsModule.pick({threeDotsVertical})
  ],
  exports: [
    SdsSubheaderComponent,
    SdsSubheaderActionsComponent,
    SdsSubheaderDrawerComponent,
    SdsDrawerContentComponent,

  ],
  declarations: [
    SdsSubheaderComponent,
    SdsSubheaderActionsComponent,
    SdsSubheaderDrawerComponent,
    SdsDrawerContentComponent
  ],
  providers: [SdsDrawerCommunicationService]
})
export class SdsSubheaderModule {}
