import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsCollapseModule } from '@gsa-sam/components';
import { SdsSystemAlertComponent } from './system-alert.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    SdsCollapseModule,
  ],
  declarations: [
    SdsSystemAlertComponent,
  ],
  exports: [
    SdsSystemAlertComponent
  ]
})
export class SdsSystemAlertModule {}
