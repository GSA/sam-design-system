import { Component, OnInit } from '@angular/core';
import { PaginationDisplayMode } from '@gsa-sam/components';

@Component({
  selector: 'sds-pagination-display-mode',
  templateUrl: './pagination-display-mode.component.html',
})
export class PaginationDisplayModeComponent {
  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 10,
  };
  totalItems = 100000;
  top = {
    id: 'top',
  };
  default: PaginationDisplayMode = 'default';
  results: PaginationDisplayMode = 'results';

  constructor() {}
}
