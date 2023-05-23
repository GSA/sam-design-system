import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyCheckboxTooltipComponent } from './formly-checkbox-tooltip.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyCheckboxTooltipComponent],
  exports: [FormlyCheckboxTooltipComponent],
  bootstrap: [FormlyCheckboxTooltipComponent],
})
export class FormlyCheckboxTooltipModule {}
