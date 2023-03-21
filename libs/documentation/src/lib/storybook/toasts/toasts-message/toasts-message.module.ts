import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsMessageComponent } from './toasts-message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastsMessageComponent],
  bootstrap: [ToastsMessageComponent],
  exports: [ToastsMessageComponent],
})
export class ToastsMessageModule {}
