import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'sds-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(private change: ChangeDetectorRef) { }

  @Output() public pageChange = new EventEmitter<PageModel>();


  page: PageModel = new PageModel();

  totalPages: number = 10;

  disabled: boolean;

  id: string;

  public options: [
    { label: '25', value: 25 },
    { label: '50', value: 50 },
    { label: '100', value: 100 }
  ];



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
    if (newValue < 1) {
      newValue = 1;
    } else if (newValue > this.totalPages) {
      newValue = this.totalPages;
    }
    if (newValue >= 1 && newValue <= this.totalPages) {
      this.page.pageNumber = newValue;
      this.change.detectChanges();
      this.pageChange.emit(this.page);
    }
    //console.log(newValue);
  }


  ngOnInit() {
    this.page.pageSize = 25;
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
  pageSize: number;
}
