import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyTextAreaConfigurableComponent } from './formly-text-area-configurable.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyTextAreaConfigurableComponent],
  exports: [FormlyTextAreaConfigurableComponent],
  bootstrap: [FormlyTextAreaConfigurableComponent],
})
export class FormlyTextAreaConfigurableModule {}
