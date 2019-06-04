import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchListLayoutComponent } from './search-list-layout.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SearchListSampleComponent', () => {
  let component: SearchListLayoutComponent;
  let fixture: ComponentFixture<SearchListLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListLayoutComponent],
      imports: [RouterTestingModule, FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
