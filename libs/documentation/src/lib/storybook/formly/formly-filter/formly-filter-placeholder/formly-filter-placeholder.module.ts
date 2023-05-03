import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterPlaceholderComponent } from './formly-filter-placeholder.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterPlaceholderComponent],
  exports: [FormlyFilterPlaceholderComponent],
  bootstrap: [FormlyFilterPlaceholderComponent],
})
export class FormlyFilterPlaceholderModule {}
