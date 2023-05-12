import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTextAreaDescriptionComponent } from './formly-text-area-description.component';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyTextAreaDescriptionComponent],
  exports: [FormlyTextAreaDescriptionComponent],
  bootstrap: [FormlyTextAreaDescriptionComponent],
})
export class FormlyTextAreaDescriptionModule {}
