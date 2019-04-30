import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'sds-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(private change: ChangeDetectorRef) { }

  @Output()
  pageChange = new EventEmitter<PageModel>();

  @Input()
  page: PageModel = new PageModel();

  /**
    * 
    */
  id: string = "id"

  public options = [
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
    if (this.page.pageNumber < this.page.totalPages) {
      this.page.pageNumber++;
      this.pageChange.emit(this.page);
    }
  }

  valuechange(newValue) {
    if (newValue < 1) {
      newValue = 1;
    } else if (newValue > this.page.totalPages) {
      newValue = this.page.totalPages;
    }
    if (newValue >= 1 && newValue <= this.page.totalPages) {
      this.page.pageNumber = newValue;
      this.pageChange.emit(this.page);
    }
  }

  onSelectChange() {
    this.pageChange.emit(this.page);
  }

  ngOnInit() {

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

  /**
   * 
   */
  totalPages: number = 10;
}
