import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableIntroductionComponent } from './table-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableIntroductionComponent],
  exports: [TableIntroductionComponent],
  bootstrap: [TableIntroductionComponent],
})
export class TableIntroductionModule {}
