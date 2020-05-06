import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFiltersComponent } from './advanced-filters.component';
import { SdsDialogService } from '@gsa-sam/components';

describe('AdvancedFiltersComponent', () => {
  let component: AdvancedFiltersComponent;
  let fixture: ComponentFixture<AdvancedFiltersComponent>;
  let dialogServiceStub: Partial<SdsDialogService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedFiltersComponent ],
      providers: [ { provide: SdsDialogService, useValue: dialogServiceStub } ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
