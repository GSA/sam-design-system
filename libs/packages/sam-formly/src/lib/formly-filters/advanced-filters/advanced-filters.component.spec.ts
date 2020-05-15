import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFiltersComponent } from './advanced-filters.component';
import { SdsDialogService } from '@gsa-sam/components';
import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AdvancedFiltersComponent', () => {
  let component: AdvancedFiltersComponent;
  let fixture: ComponentFixture<AdvancedFiltersComponent>;
  let dialogServiceStub: Partial<SdsDialogService>;
  let advancedFiltersServiceStub: Partial<SdsAdvancedFiltersService>;
  let advancedFiltersService: SdsAdvancedFiltersService;
  let dialogDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedFiltersComponent ],
      providers: [ { provide: SdsDialogService, useValue: dialogServiceStub },
      {
        provide: SdsAdvancedFiltersService, useValue: advancedFiltersServiceStub
      } ],

    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AdvancedFiltersComponent);
      component = fixture.componentInstance;
      advancedFiltersService = TestBed.get(SdsAdvancedFiltersService);
      dialogDe = fixture.debugElement.query(By.css('.usa-button--unstyled'));
      fixture.detectChanges();
    })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('stub object and injected SdsDialogService should not be the same', () => {
    expect(dialogServiceStub === SdsDialogService).toBe(false);
  });

  it('stub object and injected SdsAdvancedFiltersService should not be the same', () => {
    expect(advancedFiltersServiceStub === SdsAdvancedFiltersService).toBe(false);
  });
});
