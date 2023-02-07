import { Component } from '@angular/core';
import { PaginationDisplayMode } from '@gsa-sam/components';

@Component({
  selector: 'sds-pagination-total-items',
  templateUrl: './pagination-total-items.component.html',
})
export class PaginationTotalItemsComponent {
  constructor() {}

  smallTotalItemsPage = {
    pageNumber: 1,
    pageSize: 50,
    totalPages: 1,
  };
  smallTotalItems = 50;

  bigTotalItemsPage = {
    pageNumber: 1,
    pageSize: 50,
    totalPages: 2000,
  };
  bigTotalItems = 100000;

  displayMode: PaginationDisplayMode = 'results';
}
