import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySearchOptionalComponent } from './formly-search-optional.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlySearchOptionalComponent],
  exports: [FormlySearchOptionalComponent],
  bootstrap: [FormlySearchOptionalComponent],
})
export class FormlySearchOptionalModule {}
