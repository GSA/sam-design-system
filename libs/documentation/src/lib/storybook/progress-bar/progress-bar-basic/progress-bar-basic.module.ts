import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsProgressBarModule } from '@gsa-sam/components';
import { ProgressBarBasicComponent } from './progress-bar-basic.component';

@NgModule({
  imports: [CommonModule, SdsProgressBarModule],
  exports: [ProgressBarBasicComponent],
  declarations: [ProgressBarBasicComponent],
  bootstrap: [ProgressBarBasicComponent],
})
export class ProgressBarBasicModule {}
