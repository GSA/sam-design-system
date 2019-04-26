import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Component({
  selector: 'gsa-sam-pagination-sample',
  templateUrl: './pagination-sample.component.html',
  styleUrls: ['./pagination-sample.component.scss']
})
export class PaginationSampleComponent implements OnInit {

  public pageChange = new BehaviorSubject<object>(null);
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
