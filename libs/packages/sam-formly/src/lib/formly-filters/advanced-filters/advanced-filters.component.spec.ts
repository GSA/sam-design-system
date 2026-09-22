import { Component as StubComponent, Input } from '@angular/core';

@StubComponent({
  selector: 'usa-icon',
  template: '',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: any;
}
import { ComponentFixture, TestBed, fakeAsync, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { SdsDialogService } from '@gsa-sam/components';

import { AdvancedFiltersComponent } from './advanced-filters.component';
import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';

describe('Advanced Filteres Component', () => {
  let component: AdvancedFiltersComponent;
  let fixture: ComponentFixture<AdvancedFiltersComponent>;
  let modalServiceSpy: { open: ReturnType<typeof vi.fn> };
  let dialogRefSpyObj = { afterClosed: vi.fn().mockReturnValue(of({})) };
  let advancedFiltersService: SdsAdvancedFiltersService;

  beforeEach(waitForAsync(() => {
    modalServiceSpy = { open: vi.fn() };
    const advancedFiltersServiceSpy = { convertToCheckboxes: vi.fn() };
    TestBed.configureTestingModule({
      declarations: [AdvancedFiltersComponent, UsaIconStubComponent],
      imports: [],
      providers: [
        { provide: SdsDialogService, useValue: modalServiceSpy },
        {
          provide: SdsAdvancedFiltersService,
          useValue: advancedFiltersServiceSpy,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedFiltersComponent);
    component = fixture.componentInstance;
    advancedFiltersService = TestBed.inject(SdsAdvancedFiltersService);
    modalServiceSpy.open.mockReturnValue(dialogRefSpyObj);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it.skip('should open popup and close popup', () => {
    component.openDialog();
    fixture.detectChanges();
    expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
  });
});
