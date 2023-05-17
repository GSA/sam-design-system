import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlySelectConfigurableComponent } from './formly-select-configurable.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlySelectConfigurableComponent],
  exports: [FormlySelectConfigurableComponent],
  bootstrap: [FormlySelectConfigurableComponent],
})
export class FormlySelectConfigurableModule {}
