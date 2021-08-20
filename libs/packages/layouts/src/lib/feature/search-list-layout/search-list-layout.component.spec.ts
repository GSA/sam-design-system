import { ComponentFixture, TestBed, tick, fakeAsync, waitForAsync } from '@angular/core/testing';
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
  ResultsModel,
} from './model/search-list-layout.model';
import { of, Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { SDSFormlyUpdateModelService } from '@gsa-sam/sam-formly';
import { SimpleChange } from '@angular/core';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons as sdsAllIcons } from '@gsa-sam/ngx-uswds-icons';

describe('SearchListLayoutComponent', () => {
  let component: SearchListLayoutComponent;
  let fixture: ComponentFixture<SearchListLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListLayoutComponent],
      imports: [
        PaginationModule,
        SdsSearchResultListModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        NgxBootstrapIconsModule.pick(Object.assign(allIcons, sdsAllIcons))
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
    fakeAsync(() => tick(100));
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
    fixture.detectChanges();

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

  it('should update sortvalue through updateSearchResultsModel', () => {
    component.configuration =  {
      defaultSortValue: 'legalBusinessName',
      pageSize: 25,
      sortList: [
        { text: 'Entity Name', value: 'legalBusinessName' },
        { text: 'Status', value: 'registrationStatus' },
      ],
    };
    fixture.detectChanges();

    const config: ResultsModel = { sort: 'registrationStatus', filterModel: {} };
    component.updateSearchResultsModel(config);
    fixture.detectChanges();
    expect(component.sortField).toBe('registrationStatus');
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
