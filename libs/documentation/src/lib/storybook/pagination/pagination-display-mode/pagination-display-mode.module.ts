import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationDisplayModeComponent } from './pagination-display-mode.component';
import { PaginationModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, PaginationModule],
  declarations: [PaginationDisplayModeComponent],
  exports: [PaginationDisplayModeComponent],
  bootstrap: [PaginationDisplayModeComponent],
})
export class PaginationDisplayModeModule {}
