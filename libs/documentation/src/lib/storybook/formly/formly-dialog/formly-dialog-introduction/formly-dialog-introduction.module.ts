import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyDialogIntroductionComponent } from './formly-dialog-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormlyDialogIntroductionComponent],
  exports: [FormlyDialogIntroductionComponent],
  bootstrap: [FormlyDialogIntroductionComponent],
})
export class FormlyDialogIntroductionModule {}
