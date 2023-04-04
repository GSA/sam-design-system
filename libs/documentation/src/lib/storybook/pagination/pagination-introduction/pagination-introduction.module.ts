import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationIntroductionComponent } from './pagination-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginationIntroductionComponent],
  exports: [PaginationIntroductionComponent],
  bootstrap: [PaginationIntroductionComponent],
})
export class PaginationIntroductionModule {}
