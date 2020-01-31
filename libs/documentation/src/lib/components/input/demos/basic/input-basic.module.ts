import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { InputBasic } from './input-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FormlyModule.forRoot()],
  declarations: [InputBasic],
  exports: [InputBasic],
  bootstrap: [InputBasic]
})
export class InputBasicModule {}
