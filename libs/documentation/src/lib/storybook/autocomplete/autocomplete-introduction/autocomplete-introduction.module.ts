import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteIntroductionComponent } from './autocomplete-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AutocompleteIntroductionComponent],
  exports: [AutocompleteIntroductionComponent],
  bootstrap: [AutocompleteIntroductionComponent],
})
export class AutocompleteIntroductionModule {}
