import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsHeaderModule, SystemAlertModule } from '@gsa-sam/layouts';
import { HeaderAlertsComponent } from './header-alerts.component';

@NgModule({
  imports: [
    CommonModule,
    SdsHeaderModule,
    SystemAlertModule,
  ],
  declarations: [HeaderAlertsComponent],
  exports: [HeaderAlertsComponent],
  entryComponents: [ HeaderAlertsComponent ],
})
export class HeaderAlertsModule{}
