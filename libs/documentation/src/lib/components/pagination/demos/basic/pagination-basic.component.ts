import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Component({
  templateUrl: './pagination-basic.component.html',
  styleUrls: ['./pagination-basic.component.scss'],
  selector: `sds-pagination-basic-demo`,
})
export class PaginationBasic implements OnInit {

  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 10
  }

  top = { id: 'top' };
  bottom = { id: 'bottom' };
  public pageChange = new BehaviorSubject<object>(this.page);
  constructor() { }

  ngOnInit() {
    this.pageChange.subscribe(
      value => {
        console.log('Page Change');
        console.log(value);
      }
    );
  }

}
