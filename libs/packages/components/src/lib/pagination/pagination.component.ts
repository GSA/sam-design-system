import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'sds-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  ngOnInit(): void {
    this.maintainPreviousValue();
  }

  constructor(private change: ChangeDetectorRef) { }


  /**
   * 
   */
  private maintainPreviousValue() {
    this.previousNumber = this.page.pageNumber.valueOf();
  }

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
  debounceTime: number = 500;

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
  timeoutNumber: number;

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
      this.maintainPreviousValue();
      this.pageChange.emit(this.page);
    }
  }

  /**
   * 
   */
  nextPage() {
    if (this.page.pageNumber < this.page.totalPages) {
      this.page.pageNumber++;
      this.maintainPreviousValue();
      this.pageChange.emit(this.page);
    }
  }

  /**
   * 
   * @param newValue 
   */
  valuechange(newValue?:number) {
    window.clearTimeout(this.timeoutNumber);
    this.timeoutNumber = window.setTimeout(() => {
      if (newValue || newValue === 0) {
        newValue = this.handleInputOutsideBounds(newValue);
        if (newValue >= 1 && newValue <= this.page.totalPages) {
          this.page.pageNumber = newValue;
          this.maintainPreviousValue();
          this.pageChange.emit(this.page);
          this.change.detectChanges();
        }
      } else {

        if (this.page.pageNumber) {
          this.maintainPreviousValue();
        }
      }
    }, this.debounceTime);
  }

  /**
   * 
   * @param newValue handles
   */
  private handleInputOutsideBounds(newValue?:number) {
    if (newValue < 1) {
      newValue = 1;
      this.currentPageField.nativeElement.value = newValue;
    }
    else if (newValue > this.page.totalPages) {
      newValue = this.page.totalPages;
      this.currentPageField.nativeElement.value = newValue;
    }
    return newValue;
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


export class paginationConfiguration {

  /**
   * 
   */
  id: string;

  /**
   * 
   */
  debounceTime: number;
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
