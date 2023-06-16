import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyAutocompleteIntroductionComponent } from './formly-autocomplete-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormlyAutocompleteIntroductionComponent],
  exports: [FormlyAutocompleteIntroductionComponent],
  bootstrap: [FormlyAutocompleteIntroductionComponent],
})
export class FormlyAutocompleteIntroductionModule {}
