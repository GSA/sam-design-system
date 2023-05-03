import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterTooltipTextComponent } from './formly-filter-tooltip-text.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterTooltipTextComponent],
  exports: [FormlyFilterTooltipTextComponent],
  bootstrap: [FormlyFilterTooltipTextComponent],
})
export class FormlyFilterTooltipTextModule {}
