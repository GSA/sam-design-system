import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyButtonOptionsComponent } from './formly-button-options.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyButtonOptionsComponent],
  exports: [FormlyButtonOptionsComponent],
  bootstrap: [FormlyButtonOptionsComponent],
})
export class FormlyButtonOptionsModule {}
