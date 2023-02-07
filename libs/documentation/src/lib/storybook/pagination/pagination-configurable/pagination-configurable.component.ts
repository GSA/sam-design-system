import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationModel } from 'libs/packages/components/src/lib/pagination/model/paginationModel';

@Component({
  selector: 'sds-pagination-configurable',
  templateUrl: './pagination-configurable.component.html',
})
export class PaginationConfigurableComponent {
  @Input('paginationConfiguration')
  paginationConfiguration;
  @Input('page')
  page;
  @Input('totalItems')
  totalItems;
  @Input('displayMode')
  displayMode;

  @Output('pageChange')
  pageChange: EventEmitter<PaginationModel> = new EventEmitter();

  constructor() {}
}
