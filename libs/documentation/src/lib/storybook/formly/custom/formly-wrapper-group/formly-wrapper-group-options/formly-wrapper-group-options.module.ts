import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperGroupOptionsComponent } from './formly-wrapper-group-options.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperGroupOptionsComponent],
  exports: [FormlyWrapperGroupOptionsComponent],
  bootstrap: [FormlyWrapperGroupOptionsComponent],
})
export class FormlyWrapperGroupOptionsModule {}
