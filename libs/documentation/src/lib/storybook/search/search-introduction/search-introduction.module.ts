import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchIntroductionComponent } from './search-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchIntroductionComponent],
  exports: [SearchIntroductionComponent],
  bootstrap: [SearchIntroductionComponent],
})
export class SearchIntroductionModule {}
