import { NgModule } from '@angular/core';
import { SdsToastComponent } from './toast-single.component';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule, check2Circle, infoCircle, exclamationTriangle, slashCircle, x } from 'ngx-bootstrap-icons';
import { IconModule } from 'ngx-uswds-icons';

export let SdsToastSettings = {
  toastComponent: SdsToastComponent,
  timeOut: 6000,
  toastClass: 'sds-toast',
  positionClass: 'toast-bottom-left',
};

@NgModule({
  imports: [CommonModule, IconModule, NgxBootstrapIconsModule.pick({check2Circle, infoCircle, exclamationTriangle, slashCircle, x})],
  exports: [SdsToastComponent],
  declarations: [SdsToastComponent],
  entryComponents: [],
  providers: [],
})
export class SdsToastModule {}
