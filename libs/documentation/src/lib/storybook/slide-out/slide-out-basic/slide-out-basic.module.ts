import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideOutBasicComponent } from './slide-out-basic.component';
import { SdsDialogModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsDialogModule],
  declarations: [SlideOutBasicComponent],
  exports: [SlideOutBasicComponent],
  bootstrap: [SlideOutBasicComponent],
})
export class SlideOutBasicModule {}
