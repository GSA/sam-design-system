import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsCollapseModule, SdsIconModule } from '@gsa-sam/components';
import { SdsSystemAlertComponent } from './system-alert.component';

@NgModule({
  imports: [
    CommonModule,
    SdsIconModule,
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