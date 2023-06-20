import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperGroupBasicComponent } from './formly-wrapper-group-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperGroupBasicComponent],
  exports: [FormlyWrapperGroupBasicComponent],
  bootstrap: [FormlyWrapperGroupBasicComponent],
})
export class FormlyWrapperGroupBasicModule {}
