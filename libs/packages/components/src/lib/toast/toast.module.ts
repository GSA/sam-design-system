import { NgModule } from '@angular/core';
import { SdsToastComponent } from './toast-single.component';
import { CommonModule } from '@angular/common';
import { SdsIconModule } from '../icon/icon.module';
import { NgxBootstrapIconsModule, check2Circle, infoCircle, exclamationTriangle, slashCircle } from 'ngx-bootstrap-icons';

export let SdsToastSettings = {
  toastComponent: SdsToastComponent,
  timeOut: 6000,
  toastClass: 'sds-toast',
  positionClass: 'toast-bottom-left',
};

@NgModule({
  imports: [CommonModule, SdsIconModule, NgxBootstrapIconsModule.pick({check2Circle, infoCircle, exclamationTriangle, slashCircle})],
  exports: [SdsToastComponent],
  declarations: [SdsToastComponent],
  entryComponents: [],
  providers: [],
})
export class SdsToastModule {}
