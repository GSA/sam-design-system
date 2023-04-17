import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsPreventDuplicatesComponent } from './toasts-prevent-duplicates.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastsPreventDuplicatesComponent],
  exports: [ToastsPreventDuplicatesComponent],
  bootstrap: [ToastsPreventDuplicatesComponent],
})
export class ToastsPreventDuplicatesModule {}
