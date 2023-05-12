import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTextAreaPlaceholderComponent } from './formly-text-area-placeholder.component';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyTextAreaPlaceholderComponent],
  exports: [FormlyTextAreaPlaceholderComponent],
  bootstrap: [FormlyTextAreaPlaceholderComponent],
})
export class FormlyTextAreaPlaceholderModule { }
