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
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconModule, allIcons as sdsAllIcons } from 'ngx-uswds-icons';


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
      imports: [IconModule, NgxBootstrapIconsModule.pick(Object.assign(allIcons, sdsAllIcons))],
      providers: [
        { provide: SdsDialogService, useValue: modalServiceSpy },
        {
          provide: SdsAdvancedFiltersService,
          useValue: advancedFiltersServiceSpy
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedFiltersComponent);
    component = fixture.componentInstance;
    advancedFiltersService = TestBed.get(SdsAdvancedFiltersService);
    modalServiceSpy.open.and.returnValue(dialogRefSpyObj);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  xit('should open popup and close popup', () => {
    component.openDialog();
    fixture.detectChanges();
    expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
  });
});
