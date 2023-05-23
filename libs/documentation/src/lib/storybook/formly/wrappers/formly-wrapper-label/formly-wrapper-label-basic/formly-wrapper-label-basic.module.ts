import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperLabelBasicComponent } from './formly-wrapper-label-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperLabelBasicComponent],
  exports: [FormlyWrapperLabelBasicComponent],
  bootstrap: [FormlyWrapperLabelBasicComponent],
})
export class FormlyWrapperLabelBasicModule {}
