import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsBasic } from './toasts-basic.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ToastsBasic],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ToastsBasic],
  bootstrap: [ToastsBasic],

})
export class ToastsBasicModule {}
