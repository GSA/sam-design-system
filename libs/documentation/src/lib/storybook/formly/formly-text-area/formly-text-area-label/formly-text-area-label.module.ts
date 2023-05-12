import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTextAreaLabelComponent } from './formly-text-area-label.component';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyTextAreaLabelComponent],
  exports: [FormlyTextAreaLabelComponent],
  bootstrap: [FormlyTextAreaLabelComponent],
})
export class FormlyTextAreaLabelModule { }
