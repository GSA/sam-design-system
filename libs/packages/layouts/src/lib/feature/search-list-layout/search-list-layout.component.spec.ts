import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { SearchListLayoutComponent } from './search-list-layout.component';
import { PaginationModule, SdsSearchResultListModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import { SearchParameters, SearchResult, SearchListInterface } from './model/search-list-layout.model';
import { of, Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
describe('SearchListLayoutComponent', () => {
  let component: SearchListLayoutComponent;
  let fixture: ComponentFixture<SearchListLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListLayoutComponent],
      imports: [PaginationModule, SdsSearchResultListModule, FormsModule,
        RouterTestingModule.withRoutes([]),]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListLayoutComponent);
    component = fixture.componentInstance;
    component.configuration = {
      sortList: [{ text: 'Id', value: 'id' }],
      defaultSortValue: 'id',
      pageSize: 25
    };
    component.service = new TestService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSelectChange', fakeAsync(() => {
    component.onSelectChange();
    fixture.detectChanges();
    tick(100);
    expect(component.items.length).toBe(0);
  }));


});

class TestService implements SearchListInterface {
  getData(search: SearchParameters): Observable<SearchResult> {
    return of({
      totalItems: 1,
      items: [{ id: 1 }]
    })
  }

}
