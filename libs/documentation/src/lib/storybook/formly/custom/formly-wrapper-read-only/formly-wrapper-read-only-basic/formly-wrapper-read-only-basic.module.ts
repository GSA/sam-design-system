import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperReadOnlyBasicComponent } from './formly-wrapper-read-only-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperReadOnlyBasicComponent],
  exports: [FormlyWrapperReadOnlyBasicComponent],
  bootstrap: [FormlyWrapperReadOnlyBasicComponent],
})
export class FormlyWrapperReadOnlyBasicModule {}
