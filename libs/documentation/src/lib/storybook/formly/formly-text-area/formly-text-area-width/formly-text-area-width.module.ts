import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTextAreaWidthComponent } from './formly-text-area-width.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyTextAreaWidthComponent],
  exports: [FormlyTextAreaWidthComponent],
  bootstrap: [FormlyTextAreaWidthComponent],
})
export class FormlyTextAreaWidthModule {}
