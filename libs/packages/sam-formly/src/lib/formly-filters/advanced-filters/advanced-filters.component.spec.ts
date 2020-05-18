import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from '@angular/core/testing';
import { of } from 'rxjs';
import { SdsDialogService } from '@gsa-sam/components';

import { AdvancedFiltersComponent } from './advanced-filters.component';
import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('Advanced Filteres Component', () => {
  let component: AdvancedFiltersComponent;
  let fixture: ComponentFixture<AdvancedFiltersComponent>;
  let modalServiceSpy: jasmine.SpyObj<SdsDialogService>;
  let dialogRefSpyObj = jasmine.createSpyObj({
    afterClosed: of({})
  });
  let advancedFiltersService: SdsAdvancedFiltersService;

  beforeEach(async(() => {
    modalServiceSpy = jasmine.createSpyObj('modalService', ['open']);
    const advancedFiltersServiceSpy = jasmine.createSpyObj(
      'SdsAdvancedFiltersService',
      ['convertToCheckboxes']
    );
    TestBed.configureTestingModule({
      declarations: [AdvancedFiltersComponent],
      imports: [FontAwesomeModule],
      providers: [
        { provide: SdsDialogService, useValue: modalServiceSpy },
        {
          provide: SdsAdvancedFiltersService,
          useValue: advancedFiltersServiceSpy
        }
      ]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedFiltersComponent);
    component = fixture.componentInstance;
    advancedFiltersService = TestBed.get(SdsAdvancedFiltersService);
    modalServiceSpy.open.and.returnValue(dialogRefSpyObj);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should open popup and close popup', fakeAsync(() => {
    component.openDialog();
    expect(advancedFiltersService.convertToCheckboxes).toHaveBeenCalled();

    expect(modalServiceSpy.open).toHaveBeenCalled();
    expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
  }));
});
