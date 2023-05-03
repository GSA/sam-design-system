import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterRequiredComponent } from './formly-filter-required.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterRequiredComponent],
  exports: [FormlyFilterRequiredComponent],
  bootstrap: [FormlyFilterRequiredComponent],
})
export class FormlyFilterRequiredModule {}
