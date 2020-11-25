import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SystemAlertComponent } from './system-alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SystemAlertComponent
  ],
  exports: [
    SystemAlertComponent
  ]
})
export class SystemAlertModule {}