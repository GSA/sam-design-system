import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'iae-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  @Output() public pageChange = new EventEmitter<PageModel>();

  page: PageModel = new PageModel();
  totalPages: number;

  pageItemCount: number;
  id: string;
  options: [{ label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
    { label: '100', value: 100 }];


  previousPage() {
    if (this.page.pageNumber > 1) {
      this.page.pageNumber--;
      this.pageChange.emit(this.page);
    }
  }

  nextPage() {
    if (this.page.pageNumber < this.totalPages) {
      this.page.pageNumber++;
      this.pageChange.emit(this.page);
    }
  }

  valuechange(newValue) {
    //mymodel = newValue;
    console.log(newValue)
  }


  ngOnInit() {
    this.page.pageItemCount = 15;
    this.page.pageNumber = 1;
  }

}

export class PageModel {

  /**
   * 
   */
  pageNumber: number;
  
  /**
   * 
   */
  pageItemCount: number;
}
