import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFilterIntroductionComponent } from './formly-filter-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormlyFilterIntroductionComponent],
  exports: [FormlyFilterIntroductionComponent],
  bootstrap: [FormlyFilterIntroductionComponent],
})
export class FormlyFilterIntroductionModule {}
