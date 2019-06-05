import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchListLayoutComponent } from './search-list-layout.component';
import { PaginationModule, SdsSearchResultListModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';
describe('SearchListLayoutComponent', () => {
  let component: SearchListLayoutComponent;
  let fixture: ComponentFixture<SearchListLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListLayoutComponent],
      imports: [PaginationModule, SdsSearchResultListModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
