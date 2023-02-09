import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListIntroductionComponent } from './result-list-introduction.component';
import { SdsSearchResultListModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsSearchResultListModule],
  declarations: [ResultListIntroductionComponent],
  bootstrap: [ResultListIntroductionComponent],
  exports: [ResultListIntroductionComponent],
})
export class ResultListIntroductionModule {}
