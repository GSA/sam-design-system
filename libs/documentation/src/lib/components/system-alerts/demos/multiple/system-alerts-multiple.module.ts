import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsSystemAlertModule } from "@gsa-sam/layouts";
import { SystemAlertsMultipleComponent } from "./system-alerts-multiple.component";


@NgModule({
  imports: [
    CommonModule,
    SdsSystemAlertModule
  ],
  declarations: [
    SystemAlertsMultipleComponent
  ],
  exports: [
    SystemAlertsMultipleComponent
  ],
  bootstrap: [
    SystemAlertsMultipleComponent,
  ]
})
export class SystemAlertsMultipleModule {};
