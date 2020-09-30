import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsBasic } from './toasts-basic.component';


@NgModule({
  declarations: [ToastsBasic],
  imports: [
    CommonModule
  ],
  exports: [ToastsBasic],
  bootstrap: [ToastsBasic],

})
export class ToastsBasicModule {}
