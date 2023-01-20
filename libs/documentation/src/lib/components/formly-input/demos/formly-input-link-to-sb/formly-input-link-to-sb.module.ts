import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyInputLinkToSbComponent } from './formly-input-link-to-sb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormlyInputLinkToSbComponent],
  bootstrap: [FormlyInputLinkToSbComponent],
  exports: [FormlyInputLinkToSbComponent],
})
export class FormlyInputLinkToSbModule { }
