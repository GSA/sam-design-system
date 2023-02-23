import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableIntroductionComponent } from './tree-table-introduction.component';
import { SdsTreeTableModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsTreeTableModule],
  declarations: [TreeTableIntroductionComponent],
  exports: [TreeTableIntroductionComponent],
  bootstrap: [TreeTableIntroductionComponent],
})
export class TreeTableIntroductionModule {}
