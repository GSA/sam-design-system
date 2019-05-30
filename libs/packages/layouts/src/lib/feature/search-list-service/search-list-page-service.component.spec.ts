import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchListPageServiceComponent } from './search-list-page-service.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SearchListSampleComponent', () => {
  let component: SearchListPageServiceComponent;
  let fixture: ComponentFixture<SearchListPageServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListPageServiceComponent],
      imports: [RouterTestingModule, FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListPageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
