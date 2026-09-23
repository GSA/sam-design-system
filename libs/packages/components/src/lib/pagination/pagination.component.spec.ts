import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.page = {
      pageNumber: 1,
      pageSize: 25,
      totalPages: 10,
    };
    component.paginationConfiguration = { id: 'test' };
    component.debounceTime = 0;
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

  it('current page changed to empty', fakeAsync(() => {
    expect(component.page.pageNumber).toBe(1);
    component.valuechange(null);
    tick(1);
    expect(component.page.pageNumber).toBe(1);
  }));

  it('current page changed to empty when pageNumber is 0', fakeAsync(() => {
    (component.page as any).pageNumber = 0;
    component.valuechange(null);
    tick(1);
    expect(component.page.pageNumber).toBe(0);
  }));

  it('current page changed to zero', fakeAsync(() => {
    expect(component.page.pageNumber).toBe(1);
    component.valuechange(0);
    tick(1);
    expect(component.page.pageNumber).toBe(1);
  }));

  it('current page changed above max', fakeAsync(() => {
    component.valuechange(11);
    tick(1);
    expect(component.page.pageNumber).toBe(10);
  }));

  it('current page changed within range', fakeAsync(() => {
    component.valuechange(7);
    tick(1);
    expect(component.page.pageNumber).toBe(7);
  }));

  it('current page changed when totalPages is 0 does not emit change', fakeAsync(() => {
    component.page.totalPages = 0;
    const emitSpy = vi.spyOn(component.pageChange, 'emit');
    component.valuechange(2);
    tick(1);
    expect(emitSpy).not.toHaveBeenCalled();
  }));

  it('select change', () => {
    vi.spyOn(component.pageChange, 'emit');
    component.onSelectChange();
    expect(component.pageChange.emit).toHaveBeenCalledWith(component.page);
    expect(component.page.pageNumber).toBe(1);
  });

  it('currentPageFocusOut restores previousNumber when input is empty', () => {
    component.currentPageField.nativeElement.value = '';
    component.currentPageFocusOut();
    expect(component.page.pageNumber).toBe(1);
    expect(component.currentPageField.nativeElement.value).toBe('1');
  });

  it('currentPageFocusOut preserves value when input is non-empty', () => {
    component.currentPageField.nativeElement.value = '5';
    component.currentPageFocusOut();
    expect(component.currentPageField.nativeElement.value).toBe('5');
  });

  it('triggers previousPage and nextPage from DOM buttons', () => {
    const prevBtn = fixture.debugElement.query(By.css('#test-previousPage'));
    const nextBtn = fixture.debugElement.query(By.css('#test-nextPage'));

    nextBtn.nativeElement.click();
    expect(component.page.pageNumber).toBe(2);

    prevBtn.nativeElement.click();
    expect(component.page.pageNumber).toBe(1);
  });

  it('triggers onSelectChange from DOM select dropdown', () => {
    const spy = vi.spyOn(component.pageChange, 'emit');
    const selectEl = fixture.debugElement.query(By.css('#test-select'));

    selectEl.nativeElement.value = selectEl.nativeElement.options[1].value;
    selectEl.nativeElement.dispatchEvent(new Event('change'));

    expect(spy).toHaveBeenCalled();
    expect(component.page.pageNumber).toBe(1);
  });

  it('displays results mode when totalItems is provided', () => {
    component.displayMode = 'results';
    component.totalItems = 100;
    component.page = { pageNumber: 1, pageSize: 25, totalPages: 4 };
    fixture.detectChanges();

    const resultsText = fixture.nativeElement.textContent;
    expect(resultsText).toContain('Showing 1 - 25 of 100 results');

    // Page 2: Showing 26 - 50
    component.page = { pageNumber: 2, pageSize: 25, totalPages: 4 };
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Showing 26 - 50 of 100 results');

    // Last page where total items is not multiple of pageSize
    component.totalItems = 28;
    component.page = { pageNumber: 2, pageSize: 25, totalPages: 2 };
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Showing 26 - 28 of 28 results');
  });

  it('does not display results when totalItems is 0', () => {
    component.displayMode = 'results';
    component.totalItems = 0;
    fixture.detectChanges();

    const resultsEl = fixture.debugElement.query(By.css('.sds-pagination'));
    expect(resultsEl).toBeNull();
  });
});
