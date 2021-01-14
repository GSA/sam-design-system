import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFileInfoBasic } from './fileinfo-basic.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot(),
    SdsFormlyModule,
  ],
  declarations: [FormlyFileInfoBasic],
  exports: [FormlyFileInfoBasic],
  bootstrap: [FormlyFileInfoBasic],
})
export class FormlyFileInfoBasicModule {}
