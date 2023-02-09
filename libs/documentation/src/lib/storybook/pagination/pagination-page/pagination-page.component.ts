import { Component } from '@angular/core';

@Component({
  selector: 'sds-pagination-page',
  templateUrl: './pagination-page.component.html',
})
export class PaginationPageComponent {
  constructor() {}

  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 10,
  };
  pageConfig = { id: 'pagination-1' };
}
