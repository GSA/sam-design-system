import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySearchPlaceholderComponent } from './formly-search-placeholder.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlySearchPlaceholderComponent],
  exports: [FormlySearchPlaceholderComponent],
  bootstrap: [FormlySearchPlaceholderComponent],
})
export class FormlySearchPlaceholderModule {}
