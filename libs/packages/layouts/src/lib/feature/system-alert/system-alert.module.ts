import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SdsIconModule } from '@gsa-sam/components';
import { SdsSystemAlertComponent } from './system-alert.component';

@NgModule({
  imports: [
    CommonModule,
    SdsIconModule,
  ],
  declarations: [
    SdsSystemAlertComponent,
  ],
  exports: [
    SdsSystemAlertComponent
  ]
})
export class SdsSystemAlertModule {}