import { Component, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'sds-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  constructor(private change: ChangeDetectorRef) { }

  /**
   * 
   */
  @ViewChild('currentPage') currentPageField: ElementRef;

  /**
   * 
   */
  @Output()
  pageChange = new EventEmitter<PageModel>();

  /**
   * 
   */
  @Input()
  page: PageModel = new PageModel();

  /**
    * 
    */
  id: string = "id"

  /**
   * 
   */
  private previousNumber: number;

  /**
   * 
   */
  public options = [
    { label: '25', value: 25 },
    { label: '50', value: 50 },
    { label: '100', value: 100 }
  ];

  /**
   * 
   */
  previousPage() {
    if (this.page.pageNumber > 1) {
      this.page.pageNumber--;
      this.pageChange.emit(this.page);
    }
  }

  /**
   * 
   */
  nextPage() {
    if (this.page.pageNumber < this.page.totalPages) {
      this.page.pageNumber++;
      this.pageChange.emit(this.page);
    }
  }

  /**
   * 
   * @param newValue 
   */
  valuechange(newValue) {
    if (newValue) {
      if (newValue < 1) {
        newValue = 1;
        this.currentPageField.nativeElement.value = newValue;
      } else if (newValue > this.page.totalPages) {
        newValue = this.page.totalPages;
        this.currentPageField.nativeElement.value = newValue;
      }
      if (newValue >= 1 && newValue <= this.page.totalPages) {
        this.page.pageNumber = newValue;
        this.pageChange.emit(this.page);
        this.change.detectChanges();
      }
    } else {
      if (this.page.pageNumber) {
        this.previousNumber = this.page.pageNumber.valueOf();
      }
    }
  }

  /**
   * 
   */
  currentPageFocusOut() {
    if (this.currentPageField.nativeElement.value === '') {
      this.currentPageField.nativeElement.value = this.page.pageNumber = this.previousNumber;
      this.change.detectChanges();
    }
  }

  /**
   * 
   */
  onSelectChange() {
    this.pageChange.emit(this.page);
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
  totalPages: number;
}
