import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsHeaderModule, SdsSystemAlertModule } from '@gsa-sam/layouts';
import { HeaderAlertsComponent } from './header-alerts.component';

@NgModule({
  imports: [
    CommonModule,
    SdsHeaderModule,
    SdsSystemAlertModule,
  ],
  declarations: [HeaderAlertsComponent],
  exports: [HeaderAlertsComponent],
  entryComponents: [ HeaderAlertsComponent ],
})
export class HeaderAlertsModule{}
