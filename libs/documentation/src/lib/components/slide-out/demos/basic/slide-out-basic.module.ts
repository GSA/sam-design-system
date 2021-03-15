import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideOutBasicComponent } from './slide-out-basic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SlideOutBasicComponent],
  exports: [SlideOutBasicComponent],
  bootstrap: [SlideOutBasicComponent]
})
export class SlideOutBasicModule {}
