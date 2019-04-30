import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.page = {
      pageNumber: 1,
      pageSize: 25,
      totalPages: 10
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('paging with buttons', () => {
    expect(component.page.pageNumber).toBe(1);
    component.previousPage();
    expect(component.page.pageNumber).toBe(1);
    component.nextPage();
    expect(component.page.pageNumber).toBe(2);
    component.previousPage();
    expect(component.page.pageNumber).toBe(1);
    component.page.pageNumber = 10;
    expect(component.page.pageNumber).toBe(10);
    component.nextPage();
    expect(component.page.pageNumber).toBe(10);
    component.previousPage();
    expect(component.page.pageNumber).toBe(9);
  });

  // valuechange(newValue) {
  //   if (newValue < 1) {
  //     newValue = 1;
  //   } else if (newValue > this.page.totalPages) {
  //     newValue = this.page.totalPages;
  //   }
  //   if (newValue >= 1 && newValue <= this.page.totalPages) {
  //     this.page.pageNumber = newValue;
  //     this.pageChange.emit(this.page);
  //   }
  // }

});
