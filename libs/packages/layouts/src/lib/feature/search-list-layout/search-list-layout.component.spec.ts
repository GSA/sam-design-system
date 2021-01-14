import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { SearchListLayoutComponent } from './search-list-layout.component';
import {
  PaginationModule,
  SdsSearchResultListModule,
} from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
import {
  SearchParameters,
  SearchResult,
  SearchListInterface,
} from './model/search-list-layout.model';
import { of, Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { SDSFormlyUpdateModelService } from '@gsa-sam/sam-formly';
import { SimpleChange } from '@angular/core';
describe('SearchListLayoutComponent', () => {
  let component: SearchListLayoutComponent;
  let fixture: ComponentFixture<SearchListLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListLayoutComponent],
      imports: [
        PaginationModule,
        SdsSearchResultListModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [SDSFormlyUpdateModelService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListLayoutComponent);
    component = fixture.componentInstance;
    component.configuration = {
      sortList: [{ text: 'Id', value: 'id' }],
      defaultSortValue: 'id',
      pageSize: 25,
    };
    component.service = new TestService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSelectChange', () => {
    component.onSelectChange();
    fixture.detectChanges();
    tick(100);
    expect(component.items.length).toBe(0);
  });
  it('should call filterUpdate', fakeAsync(() => {
    const filterData = { searchKeyword: 'test', entity: 'testEntity' };
    component.page = {
      pageNumber: 1,
      pageSize: 25,
      totalPages: 0,
      default: true,
    };
    component.updateFilter(filterData);
    fixture.detectChanges();
    tick(100);
    expect(component.page.default).toBe(false);
  }));

  it('should call updateFilterModel', () => {
    let service = fixture.debugElement.injector.get(
      SDSFormlyUpdateModelService
    );
    const serviceSpy = spyOn(service, 'updateModel').and.callThrough(); // create spy
    const filterData = {
      filterModel: { searchKeyword: 'test', entity: 'testEntity' },
    };
    component.updateSearchResultsModel(filterData);
    fixture.detectChanges();
    expect(serviceSpy).toHaveBeenCalled();
    expect(service.updateModel).toHaveBeenCalled();
  });

  it('should set configuration & sortField on ngOnChanges', () => {
    component.ngOnChanges({
      configuration: new SimpleChange(
        null,
        { defaultSortValue: 'testValue' },
        null
      ),
    });
    fixture.detectChanges();
    expect(component.sortField).toBe('testValue');
  });
});

class TestService implements SearchListInterface {
  getData(search: SearchParameters): Observable<SearchResult> {
    return of({
      totalItems: 1,
      items: [{ id: 1 }],
    });
  }
}
