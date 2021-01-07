import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsBasic } from './toasts-basic.component';
import { FormsModule } from '@angular/forms';
import {
  SdsToastComponent,
  SdsToastModule,
  SdsToastSettings,
} from '@gsa-sam/components';

@NgModule({
  declarations: [ToastsBasic],
  imports: [CommonModule, FormsModule, SdsToastModule],
  exports: [ToastsBasic],
  bootstrap: [ToastsBasic],
})
export class ToastsBasicModule {}
