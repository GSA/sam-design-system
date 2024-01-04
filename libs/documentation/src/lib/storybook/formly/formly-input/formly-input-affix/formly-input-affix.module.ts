import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyInputAffixComponent } from './formly-input-affix.component';
import {
  NgxBootstrapIconsModule,
  caretDownFill,
  caretUpFill,
  filter,
  arrowClockwise,
  chevronDown,
  infoCircleFill,
  calendar,
  x,
} from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot(),IconModule,
  NgxBootstrapIconsModule.pick({
      caretDownFill,
      caretUpFill,
      filter,
      arrowClockwise,
      chevronDown,
      infoCircleFill,
      calendar,
      x,
    }),
],
  declarations: [FormlyInputAffixComponent],
  exports: [FormlyInputAffixComponent],
  bootstrap: [FormlyInputAffixComponent],
})
export class FormlyInputAffixModule {}
