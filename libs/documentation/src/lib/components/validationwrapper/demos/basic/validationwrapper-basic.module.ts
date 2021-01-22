import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { ValidationWrapperBasic } from './validationwrapper-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [ValidationWrapperBasic],
  exports: [ValidationWrapperBasic],
  bootstrap: [ValidationWrapperBasic]
})
export class ValidationWrapperBasicModule {}
