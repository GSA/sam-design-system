import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFileInfoBasic } from './fileinfo-basic.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot(),
  ],
  declarations: [FormlyFileInfoBasic],
  exports: [FormlyFileInfoBasic],
  bootstrap: [FormlyFileInfoBasic],
})
export class FormlyFileInfoBasicModule {}
