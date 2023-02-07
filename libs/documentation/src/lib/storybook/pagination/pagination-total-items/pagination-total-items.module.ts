import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationTotalItemsComponent } from './pagination-total-items.component';
import { PaginationModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, PaginationModule],
  declarations: [PaginationTotalItemsComponent],
  exports: [PaginationTotalItemsComponent],
  bootstrap: [PaginationTotalItemsComponent],
})
export class PaginationTotalItemsModule {}
