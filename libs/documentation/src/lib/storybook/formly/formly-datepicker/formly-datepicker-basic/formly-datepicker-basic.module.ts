import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyDatepickerBasicComponent } from './formly-datepicker-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyDatepickerBasicComponent],
  exports: [FormlyDatepickerBasicComponent],
  bootstrap: [FormlyDatepickerBasicComponent],
})
export class FormlyDatepickerBasicModule {}
