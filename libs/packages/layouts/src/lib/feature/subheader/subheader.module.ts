import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  SdsMenuModule,
  SdsSearchModule,
  SdsObserversModule,
  SdsTruncateModule
} from '@gsa-sam/components';
import {
  SdsSubheaderComponent,
  SdsSubheaderActionsComponent,
  SdsSubheaderSearchComponent,
  SdsSubheaderButtonsComponent,
  SdsSubheaderDrawerComponent
} from './subheader.component';
import { SdsActionsMenuModule } from '../actions-menu/actions-menu.module';
import { SdsDrawerModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsMenuModule,
    SdsObserversModule,
    SdsSearchModule,
    SdsTruncateModule,
    SdsActionsMenuModule,
    SdsDrawerModule
  ],
  exports: [
    SdsSubheaderComponent,
    SdsSubheaderActionsComponent,
    SdsSubheaderSearchComponent,
    SdsSubheaderButtonsComponent,
    SdsSubheaderDrawerComponent
  ],
  declarations: [
    SdsSubheaderComponent,
    SdsSubheaderActionsComponent,
    SdsSubheaderSearchComponent,
    SdsSubheaderButtonsComponent,
    SdsSubheaderDrawerComponent
  ],
  providers: []
})
export class SdsSubheaderModule {}
