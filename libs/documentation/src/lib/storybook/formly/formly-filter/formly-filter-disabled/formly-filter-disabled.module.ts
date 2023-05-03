import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterDisabledComponent } from './formly-filter-disabled.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterDisabledComponent],
  bootstrap: [FormlyFilterDisabledComponent],
  exports: [FormlyFilterDisabledComponent],
})
export class FormlyFilterDisabledModule {}
