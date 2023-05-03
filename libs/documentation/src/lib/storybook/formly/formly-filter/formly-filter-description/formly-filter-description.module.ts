import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterDescriptionComponent } from './formly-filter-description.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterDescriptionComponent],
  exports: [FormlyFilterDescriptionComponent],
  bootstrap: [FormlyFilterDescriptionComponent],
})
export class FormlyFilterDescriptionModule {}
