import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFileinfoOptionsComponent } from './formly-file-info-options.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFileinfoOptionsComponent],
  exports: [FormlyFileinfoOptionsComponent],
  bootstrap: [FormlyFileinfoOptionsComponent],
})
export class FormlyFileinfoOptionsModule {}
