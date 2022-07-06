import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { CheckboxRadio } from './checkbox-radio.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

import { PanelWrapperComponent } from './panel-wrapper.component';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot({
    wrappers: [
      { name: 'panel', component: PanelWrapperComponent },
    ],
  })],
  declarations: [CheckboxRadio, PanelWrapperComponent],
  exports: [CheckboxRadio],
  bootstrap: [CheckboxRadio],
})
export class CheckboxRadioModule {}