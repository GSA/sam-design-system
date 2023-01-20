import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyInputConfigurableComponent } from './formly-input-configurable.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyInputConfigurableComponent],
  exports: [FormlyInputConfigurableComponent],
  bootstrap: [FormlyInputConfigurableComponent],
})
export class FormlyInputConfigurableModule {}
