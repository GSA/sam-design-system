import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsIconModule } from '@gsa-sam/components';
import { SystemAlertComponent } from './system-alert.component';

@NgModule({
  imports: [
    CommonModule,
    SdsIconModule,
  ],
  declarations: [
    SystemAlertComponent
  ],
  exports: [
    SystemAlertComponent
  ]
})
export class SystemAlertModule {}