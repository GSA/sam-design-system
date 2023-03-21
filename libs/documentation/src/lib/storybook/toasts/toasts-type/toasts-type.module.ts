import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsTypeComponent } from './toasts-type.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastsTypeComponent],
  exports: [ToastsTypeComponent],
  bootstrap: [ToastsTypeComponent],
})
export class ToastsTypeModule {}
