import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  SdsMenuModule,
  SdsSearchModule,
  SdsObserversModule,
  SdsTruncateModule,
  SdsIconModule
} from '@gsa-sam/components';
import {
  SdsSubheaderComponent,
  SdsSubheaderActionsComponent,
  SdsSubheaderDrawerComponent,
  SdsDrawerContentComponent
} from './subheader.component';
import { SdsActionsMenuModule } from '../actions-menu/actions-menu.module';
import { SdsDrawerCommunicationService } from './drawer-communication.service';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsMenuModule,
    SdsObserversModule,
    SdsSearchModule,
    SdsTruncateModule,
    SdsActionsMenuModule,
    SdsIconModule
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
