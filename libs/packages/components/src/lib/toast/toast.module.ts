import { NgModule } from '@angular/core';
import { SdsToastComponent } from './toast-single.component';
import { CommonModule } from '@angular/common';

export let SdsToastSettings = {
  toastComponent: SdsToastComponent,
  timeOut: 6000,
  toastClass: 'sds-toast',
  positionClass: 'toast-bottom-left',
};

@NgModule({
  imports: [CommonModule],
  exports: [SdsToastComponent],
  declarations: [SdsToastComponent],
  entryComponents: [],
  providers: [],
})
export class SdsToastModule {}
