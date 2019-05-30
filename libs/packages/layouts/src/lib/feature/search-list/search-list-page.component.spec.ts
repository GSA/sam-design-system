import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchListSampleComponent } from './search-list-page.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SearchListSampleComponent', () => {
  let component: SearchListSampleComponent;
  let fixture: ComponentFixture<SearchListSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListSampleComponent],
      imports: [RouterTestingModule, FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
