import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySearchLabelComponent } from './formly-search-label.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlySearchLabelComponent],
  exports: [FormlySearchLabelComponent],
  bootstrap: [FormlySearchLabelComponent],
})
export class FormlySearchLabelModule {}
