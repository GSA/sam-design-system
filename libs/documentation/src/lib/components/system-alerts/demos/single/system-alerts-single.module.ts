import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsSystemAlertModule } from "@gsa-sam/layouts";
import { SystemAlertsSingleComponent } from "./system-alerts-single.component";

@NgModule({
  imports: [
    CommonModule,
    SdsSystemAlertModule,
  ],
  declarations: [
    SystemAlertsSingleComponent
  ],
  exports: [
    SystemAlertsSingleComponent
  ],
  bootstrap: [
    SystemAlertsSingleComponent
  ]
})
export class SystemAlertsSingleModule {}