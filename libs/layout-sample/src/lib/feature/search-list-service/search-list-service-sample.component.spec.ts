import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchListServiceSampleComponent } from './search-list-sample.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SearchListSampleComponent', () => {
  let component: SearchListServiceSampleComponent;
  let fixture: ComponentFixture<SearchListServiceSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListServiceSampleComponent],
      imports: [RouterTestingModule, FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListServiceSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
