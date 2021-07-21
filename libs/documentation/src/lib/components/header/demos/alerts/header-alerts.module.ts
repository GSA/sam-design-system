import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsHeaderModule, SdsSystemAlertModule } from '@gsa-sam/layouts';
import { HeaderAlertsComponent } from './header-alerts.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { request, messages, workspace, logOut } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [
    CommonModule,
    SdsHeaderModule,
    SdsSystemAlertModule,
    NgxBootstrapIconsModule.pick({request, messages, workspace, logOut})
  ],
  declarations: [HeaderAlertsComponent],
  exports: [HeaderAlertsComponent],
  bootstrap: [ HeaderAlertsComponent ],
})
export class HeaderAlertsModule{}
