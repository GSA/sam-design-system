import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormlyDatepickerBasic } from './datepicker-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [FormlyDatepickerBasic],
  exports: [FormlyDatepickerBasic],
  bootstrap: [FormlyDatepickerBasic]
})
export class FormlyDatepickerBasicModule {}
