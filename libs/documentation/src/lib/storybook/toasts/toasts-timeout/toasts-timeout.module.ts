import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsTimeoutComponent } from './toasts-timeout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastsTimeoutComponent],
  exports: [ToastsTimeoutComponent],
  bootstrap: [ToastsTimeoutComponent],
})
export class ToastsTimeoutModule {}
