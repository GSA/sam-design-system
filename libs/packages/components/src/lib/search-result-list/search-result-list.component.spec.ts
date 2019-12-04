import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsSearchResultListComponent } from './search-result-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SdsSearchResultListComponent', () => {
  let component: SdsSearchResultListComponent;
  let fixture: ComponentFixture<SdsSearchResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSearchResultListComponent],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSearchResultListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
