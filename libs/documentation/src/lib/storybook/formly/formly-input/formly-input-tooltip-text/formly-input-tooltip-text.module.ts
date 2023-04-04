import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyInputTooltipTextComponent } from './formly-input-tooltip-text.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyInputTooltipTextComponent],
  exports: [FormlyInputTooltipTextComponent],
  bootstrap: [FormlyInputTooltipTextComponent],
})
export class FormlyInputTooltipTextModule {}
