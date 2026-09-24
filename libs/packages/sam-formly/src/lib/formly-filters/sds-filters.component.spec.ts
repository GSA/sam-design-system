import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule, DatePipe } from '@angular/common';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { SdsFormlyModule } from '../formly/formly.module';
import { SdsFiltersComponent } from './sds-filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component as StubComponent, DebugElement, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { SDSFormlyUpdateModelService } from './service/sds-filter-model-update.service';
import { FormlyFieldInputComponent } from '../formly/types/input';
import { FormlyFieldSearchComponent } from '../formly/types/search';
import { SdsReadonlyModule } from '../formly/readonly/readonly.module';
import { SdsDialogService, SdsPopoverModule } from '@gsa-sam/components';
import { Subject, of } from 'rxjs';
import { SdsFormlyTypes } from '../formly/models/formly-types';
import { ReadonlyDataType } from '../formly/services/formly-utils.service';

@StubComponent({
  selector: 'usa-icon',
  template: '<i class="bi bi-{{icon}}"></i>',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: any;
}

@StubComponent({
  selector: 'sds-advanced-filters',
  template: '',
  standalone: false,
})
class SdsAdvancedFiltersStubComponent {
  @Input() form: any;
  @Input() sortMoreFilterBy: any;
  @Input() fields: any;
  @Input() options: any;
  @Input() model: any;
  @Input() isInactiveValueFieldShown: any;
  @Input() enablePopover: any;
  @Output() showInactiveFiltersChange = new EventEmitter<any>();
}

@StubComponent({
  selector: 'sds-formly-reset',
  template: '<button (click)="resetAll()" class="sds-button--circle">Reset</button>',
  standalone: false,
})
class SdsFormlyResetStubComponent {
  @Input() options: any;
  @Input() defaultModel: any;
  @Output() resetClicked = new EventEmitter<any>();
  resetAll() {
    if (this.defaultModel) {
      this.options?.resetModel?.(this.defaultModel);
    } else {
      this.options?.resetModel?.();
    }
    this.resetClicked.emit();
  }
}

describe('The Sam Filters Component', () => {
  describe('rendered tests', () => {
    let component: SdsFiltersComponent;
    let fixture: ComponentFixture<SdsFiltersComponent>;
    let router: any;
    let location: Location;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes([]),
          SdsFormlyModule,
          FormlyModule,
        ],
        declarations: [
          SdsFiltersComponent,
          UsaIconStubComponent,
          SdsAdvancedFiltersStubComponent,
          SdsFormlyResetStubComponent,
        ],
        providers: [SDSFormlyUpdateComunicationService],
      });
      TestBed.overrideComponent(FormlyFieldInputComponent, {
        set: {
          template:
            '<input [id]="id" [formControl]="formControl" [type]="props.inputType ? props.inputType : \'text\'" class="usa-input" />',
        },
      });
      router = TestBed.inject(Router);
      location = TestBed.inject(Location);

      fixture = TestBed.createComponent(SdsFiltersComponent);
      router.initialNavigation();
      component = fixture.componentInstance;
      component.fields = [
        {
          key: 'filters',
          props: { label: 'Entity Name/UEI' },
          fieldGroup: [
            {
              key: 'uniqueId',
              type: 'input',
              props: {
                required: true,
                label: 'Formly input type number',
                placeholder: 'eg: Acme Corporation',
                min: 13,
                max: 400,
                minLength: 2,
                maxLength: 4,
                inputType: 'number',
                inputStyle: 'error',
                errorMessage: 'Helpful error message',
              },
              validation: {
                show: true,
              },
            },
          ],
        },
      ];
      component.form = new UntypedFormGroup({});
    });

    it('input type should be text', () => {
      fixture.detectChanges();
      const inputField = fixture.debugElement.query(By.css('.usa-input'));
      expect(inputField.nativeElement.type).toBe('number');
    });
    it('input value cannot be less than min', () => {
      component.model = { test: null, filters: { uniqueId: 12 } };
      fixture.detectChanges();
      expect(component.form.invalid).toBe(true);
    });

    it('input value length should be between min length and max length', () => {
      component.model = { test: null, filters: { uniqueId: 1 } };
      fixture.detectChanges();
      expect(component.form.invalid).toBe(true);
    });

    it('should not change the route when history set to false', fakeAsync(() => {
      component.model = {
        filter: {
          entityType: '30',
        },
      };
      component.fields = [
        {
          key: 'filter',
          wrappers: ['filterwrapper'],
          props: { label: 'Entity Types' },
          fieldGroup: [
            {
              key: 'entityType',
              type: 'radio',
              props: {
                label: 'Expiration Date',
                options: [
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' },
                ],
              },
            },
          ],
        },
      ];
      fixture.detectChanges();
      component.isHistoryEnable = false;
      component.onModelChange(component.model);
      tick();
      fixture.detectChanges();
      // Under jsdom (no browser), the environment's default location has a
      // root pathname of '/', where a real browser test page reports ''
      // for the same "no navigation happened" state — an artifact of the
      // headless jsdom environment, not a behavioral difference in the
      // component. See the analogous Karma → Vitest note in dialog.spec.ts.
      expect(['', '/']).toContain(location.path());
    }));
    it('should call coominication service', () => {
      component.model = {
        filter: {
          entityType: '30',
        },
      };
      component.fields = [
        {
          key: 'filter',
          wrappers: ['filterwrapper'],
          props: { label: 'Entity Types' },
          fieldGroup: [
            {
              key: 'entityType',
              type: 'radio',
              props: {
                label: 'Expiration Date',
                options: [
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' },
                ],
              },
            },
          ],
        },
      ];
      const service = fixture.debugElement.injector.get(SDSFormlyUpdateComunicationService);
      const serviceSpy = vi.spyOn(service, 'updateFilter'); // create spy
      component.updateChange(component.model);
      fixture.detectChanges();
      expect(serviceSpy).toHaveBeenCalled();
      expect(service.updateFilter).toHaveBeenCalled();
    });
    it('should return new Object with some properties as null based on base Object', () => {
      component.form = new UntypedFormGroup({
        test: new UntypedFormControl(''),
        filters: new UntypedFormControl(''),
        searchEntity: new UntypedFormControl(''),
      });
      component.form.controls['filters'].setValue([{ uniqueId: 1 }, { uniqueId: 1 }]);
      const updateFormValue = { test: 'abc', filters: { uniqueId: 2 } };
      const expectedOutput = {
        test: 'abc',
        filters: { uniqueId: 2 },
        searchEntity: null,
      };
      const result = component.overwrite(component.form.getRawValue(), updateFormValue);
      expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedOutput));
    });
  });
  describe('validation tests', () => {
    let component: SdsFiltersComponent;
    let fixture: ComponentFixture<SdsFiltersComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes([]),
          SdsFormlyModule,
          FormlyModule,
        ],
        declarations: [
          SdsFiltersComponent,
          UsaIconStubComponent,
          SdsAdvancedFiltersStubComponent,
          SdsFormlyResetStubComponent,
        ],
      });
      TestBed.overrideComponent(FormlyFieldInputComponent, {
        set: {
          template:
            '<input [id]="id" [formControl]="formControl" [type]="props.inputType ? props.inputType : \'text\'" class="usa-input" />',
        },
      });

      fixture = TestBed.createComponent(SdsFiltersComponent);
      component = fixture.componentInstance;
      component.fields = [
        {
          key: 'filters',
          props: { label: 'Entity Name/UEI' },
          fieldGroup: [
            {
              key: 'uniqueId',
              type: 'input',

              props: {
                required: true,
                label: 'Formly input type number',
                placeholder: 'eg: Acme Corporation',
                minLength: 2,
                maxLength: 4,
                inputType: 'number',
              },
              validation: {
                show: true,
              },
            },
          ],
        },
      ];
      component.form = new UntypedFormGroup({});
    });
    it('validation value length should be between min length and max length', () => {
      component.model = { filters: { uniqueId: '4' } };
      fixture.detectChanges();

      const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
      const err = fixture.debugElement.query(By.css('.usa-error-message'));
      inputField.nativeElement.value = '4';
      inputField.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.form.invalid).toBe(true);
    });

    it('value length should be between min length and max length', () => {
      component.model = { test: null, filters: { uniqueId: '45466' } };
      fixture.detectChanges();
      const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
      inputField.nativeElement.value = '45466';
      inputField.nativeElement.dispatchEvent(new Event('input'));
      expect(component.form.invalid).toBe(true);
    });

    it('should change the hide value when model has value', () => {
      component.fields = [
        {
          key: 'filters',
          props: { label: 'Entity Name/UEI' },
          fieldGroup: [
            {
              key: 'uniqueId',
              type: 'input',
              hide: true,
              props: {
                required: true,
                label: 'Formly input type number',
                placeholder: 'eg: Acme Corporation',
                minLength: 2,
                maxLength: 4,
                inputType: 'number',
              },
              validation: {
                show: true,
              },
            },
          ],
        },
      ];
      component.model = { test: null, filters: { uniqueId: '45466' } };
      fixture.detectChanges();
      expect(component.fields[0].fieldGroup[0].hide).toBe(true);
    });
    it('should change the hide value when model has value', () => {
      component.fields = [
        {
          key: 'filters',
          type: 'input',
          hide: true,
          props: {
            label: 'State',
            description: 'State',
          },
        },
      ];
      component.model = { filters: '45466' };
      fixture.detectChanges();
      expect(component.fields[0].hide).toBe(true);
    });

    it('Should reset to given defaultModel if provided', () => {
      component.fields = [
        {
          key: 'filters',
          type: 'input',
          hide: true,
          props: {
            label: 'State',
            description: 'State',
          },
        },
      ];

      component.model = { filters: '12345' };
      component.defaultModel = { filters: '67890' };

      fixture.detectChanges();

      const resetAllButton = fixture.nativeElement.querySelector('button');
      resetAllButton.click();
      fixture.detectChanges();
      expect(component.model).toEqual({ filters: '67890' });
    });

    it('Should reset to Formly initial model when defaultModel is omitted', () => {
      component.fields = [
        {
          key: 'keyword',
          type: 'input',
          props: {
            label: 'Keyword',
          },
        },
      ];

      // Formly captures initial model on first change detection
      component.model = { keyword: 'initialKeyword' };
      fixture.detectChanges();

      // User changes model
      component.model.keyword = 'changedKeyword';
      component.form.get('keyword')?.setValue('changedKeyword');
      fixture.detectChanges();

      const resetAllButton = fixture.nativeElement.querySelector('button');
      resetAllButton.click();
      fixture.detectChanges();
      expect(component.model).toEqual({ keyword: 'initialKeyword' });
    });

    it('Should preserve Date instance when reset() is called with defaultModel containing Date', () => {
      const resetDate = new Date('2025-06-01T12:00:00Z');
      component.defaultModel = { filterDate: resetDate };
      component.model = { filterDate: new Date('2020-01-01T00:00:00Z') };

      component.reset();

      expect(component.model.filterDate).toBeInstanceOf(Date);
      expect(component.model.filterDate.getTime()).toBe(resetDate.getTime());
    });
  });

  describe('Model Synchronization with SDSFormlyUpdateModelService', () => {
    let component: SdsFiltersComponent;
    let fixture: ComponentFixture<SdsFiltersComponent>;
    let modelUpdateService: SDSFormlyUpdateModelService;

    beforeEach(() => {
      modelUpdateService = new SDSFormlyUpdateModelService();

      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes([]),
          SdsFormlyModule,
          FormlyModule,
        ],
        declarations: [
          SdsFiltersComponent,
          UsaIconStubComponent,
          SdsAdvancedFiltersStubComponent,
          SdsFormlyResetStubComponent,
        ],
        providers: [
          SDSFormlyUpdateComunicationService,
          { provide: SDSFormlyUpdateModelService, useValue: modelUpdateService },
        ],
      });
      TestBed.overrideComponent(FormlyFieldInputComponent, {
        set: {
          template:
            '<input [id]="id" [formControl]="formControl" [type]="props.inputType ? props.inputType : \'text\'" class="usa-input" />',
        },
      });

      fixture = TestBed.createComponent(SdsFiltersComponent);
      component = fixture.componentInstance;
      component.fields = [
        {
          key: 'keyword',
          type: 'input',
          props: { label: 'Keyword' },
        },
        {
          key: 'agency',
          type: 'input',
          hide: true,
          props: { label: 'Agency' },
        },
      ];
      component.form = new UntypedFormGroup({
        keyword: new UntypedFormControl(''),
        agency: new UntypedFormControl(''),
      });
      component.model = { keyword: '', agency: '' };
    });

    it('should synchronize model and form when modelUpdateService emits', () => {
      fixture.detectChanges();

      modelUpdateService.updateModel({ keyword: 'Aerospace', agency: 'NASA' });
      fixture.detectChanges();

      expect(component.model.keyword).toBe('Aerospace');
      expect(component.model.agency).toBe('NASA');
      expect(component.form.get('keyword').value).toBe('Aerospace');
      expect(component.form.get('agency').value).toBe('NASA');
      expect(component.fields[1].hide).toBe(false);
    });

    it('should handle overwrite with Date instances and null', () => {
      const baseObj = {
        dateField: new Date('2020-01-01'),
        nullDateField: new Date('2020-01-01'),
        arrayField: ['initial'],
        nested: { count: 1 },
      };

      const newObj = {
        dateField: '2025-06-15',
        nullDateField: undefined,
        arrayField: ['updated'],
        nested: { count: 2 },
      };

      const result: any = component.overwrite(baseObj, newObj);

      expect(result.dateField).toBeInstanceOf(Date);
      expect(result.dateField.getFullYear()).toBe(2025);
      expect(result.nullDateField).toBeNull();
      expect(result.arrayField).toEqual(['updated']);
      expect(result.nested.count).toBe(2);
    });

    it('should unsubscribe and stop listening on ngOnDestroy', () => {
      fixture.detectChanges();
      component.ngOnDestroy();

      modelUpdateService.updateModel({ keyword: 'ShouldNotUpdate' });

      expect(component.model.keyword).not.toBe('ShouldNotUpdate');
    });
  });

  describe('Filter Resets and Events', () => {
    let component: SdsFiltersComponent;
    let fixture: ComponentFixture<SdsFiltersComponent>;
    let commsService: SDSFormlyUpdateComunicationService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes([]),
          SdsFormlyModule,
          FormlyModule,
        ],
        declarations: [
          SdsFiltersComponent,
          UsaIconStubComponent,
          SdsAdvancedFiltersStubComponent,
          SdsFormlyResetStubComponent,
        ],
        providers: [SDSFormlyUpdateComunicationService],
      });
      TestBed.overrideComponent(FormlyFieldInputComponent, {
        set: {
          template:
            '<input [id]="id" [formControl]="formControl" [type]="props.inputType ? props.inputType : \'text\'" class="usa-input" />',
        },
      });

      fixture = TestBed.createComponent(SdsFiltersComponent);
      component = fixture.componentInstance;
      commsService = TestBed.inject(SDSFormlyUpdateComunicationService);
      component.fields = [
        {
          key: 'keyword',
          type: 'input',
          props: { label: 'Keyword' },
        },
      ];
      component.form = new UntypedFormGroup({});
      component.options = {
        fieldChanges: new Subject<any>(),
      };
      component.defaultModel = { keyword: 'defaultVal' };
      component.model = { keyword: 'currentVal' };
    });

    it('onResetClicked should emit resetAll event on options.fieldChanges and emit resetClicked', () => {
      let emittedFieldChange: any;
      component.options.fieldChanges.subscribe((event) => {
        emittedFieldChange = event;
      });

      const resetClickedSpy = vi.spyOn(component.resetClicked, 'emit');
      component.onResetClicked();

      expect(emittedFieldChange).toEqual({
        field: { key: '' },
        type: 'resetAll',
        value: undefined,
      });
      expect(resetClickedSpy).toHaveBeenCalled();
    });

    it('reset should restore defaultModel, notify services, emit events, and update chips', () => {
      const commsSpy = vi.spyOn(commsService, 'updateFilter');
      const filterChangeSpy = vi.spyOn(component.filterChange, 'emit');
      const resetClickedSpy = vi.spyOn(component.resetClicked, 'emit');

      component.reset();

      expect(component.model).toEqual({ keyword: 'defaultVal' });
      expect(commsSpy).toHaveBeenCalledWith({ keyword: 'defaultVal' });
      expect(filterChangeSpy).toHaveBeenCalledWith({ keyword: 'defaultVal' });
      expect(resetClickedSpy).toHaveBeenCalled();
    });
  });

  describe('Search Field and Dynamic Configurations', () => {
    let component: SdsFiltersComponent;
    let fixture: ComponentFixture<SdsFiltersComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes([]),
          SdsFormlyModule,
          FormlyModule,
        ],
        declarations: [
          SdsFiltersComponent,
          UsaIconStubComponent,
          SdsAdvancedFiltersStubComponent,
          SdsFormlyResetStubComponent,
        ],
      });
      TestBed.overrideComponent(FormlyFieldInputComponent, {
        set: {
          template:
            '<input [id]="id" [formControl]="formControl" [type]="props.inputType ? props.inputType : \'text\'" class="usa-input" />',
        },
      });
      TestBed.overrideComponent(FormlyFieldSearchComponent, {
        set: {
          template: '<div class="search-stub"></div>',
        },
      });
      vi.spyOn(FormlyFieldSearchComponent.prototype, 'ngOnInit').mockImplementation(() => {});

      fixture = TestBed.createComponent(SdsFiltersComponent);
      component = fixture.componentInstance;
      component.fields = [];
      component.form = new UntypedFormGroup({});
      component.model = {};
    });

    it('should add searchField to fields when enableSearchfield is true on init', () => {
      component.enableSearchfield = true;
      component.horizontalSearchPlaceholder = 'Search contracts...';
      component.ngOnInit();

      expect(component.fields.length).toBe(1);
      expect(component.fields[0].key).toBe('search');
      expect(component.fields[0].type).toBe('search');
      expect(component.fields[0].props.searchSettings.placeholder).toBe('Search contracts...');
    });

    it('should update searchField placeholder through horizontalSearchPlaceholder setter', () => {
      component.horizontalSearchPlaceholder = 'New Placeholder';
      expect(component.horizontalSearchPlaceholder).toBe('New Placeholder');
      expect(component.searchField.props.searchSettings.placeholder).toBe('New Placeholder');
    });

    it('ngOnChanges should call checkForHide when model changes', () => {
      const checkForHideSpy = vi.spyOn(component, 'checkForHide');
      component.fields = [{ key: 'status', type: 'input', hide: true }];

      component.ngOnChanges({
        model: new SimpleChange({ status: 'old' }, { status: 'new' }, false),
      });

      expect(checkForHideSpy).toHaveBeenCalled();
    });

    it('ngOnChanges should not call checkForHide when model reference does not change', () => {
      const checkForHideSpy = vi.spyOn(component, 'checkForHide');
      const sameModel = { status: 'active' };

      component.ngOnChanges({
        model: new SimpleChange(sameModel, sameModel, false),
      });

      expect(checkForHideSpy).not.toHaveBeenCalled();
    });

    it('handleInactiveFilterChange should emit showInactiveFiltersChange', () => {
      const emitSpy = vi.spyOn(component.showInactiveFiltersChange, 'emit');
      component.displayChips = true;
      component.model = {};

      component.handleInactiveFilterChange(true);

      expect(emitSpy).toHaveBeenCalledWith(true);
    });
  });

  describe('Emissions and Clean Model Conversions', () => {
    let component: SdsFiltersComponent;
    let fixture: ComponentFixture<SdsFiltersComponent>;
    let commsService: SDSFormlyUpdateComunicationService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes([]),
          SdsFormlyModule,
          FormlyModule,
        ],
        declarations: [
          SdsFiltersComponent,
          UsaIconStubComponent,
          SdsAdvancedFiltersStubComponent,
          SdsFormlyResetStubComponent,
        ],
        providers: [SDSFormlyUpdateComunicationService],
      });

      fixture = TestBed.createComponent(SdsFiltersComponent);
      component = fixture.componentInstance;
      commsService = TestBed.inject(SDSFormlyUpdateComunicationService);
      component.fields = [];
      component.form = new UntypedFormGroup({});
      component.model = {};
    });

    it('should emit raw change when getCleanModel is false', () => {
      const emitSpy = vi.spyOn(component.filterChange, 'emit');
      component.getCleanModel = false;
      const rawChange = { status: 'active', empty: '' };

      component.updateChange(rawChange);

      expect(emitSpy).toHaveBeenCalledWith(rawChange);
    });

    it('should emit cleaned model when getCleanModel is true', () => {
      const emitSpy = vi.spyOn(component.filterChange, 'emit');
      component.getCleanModel = true;
      const rawChange = {
        active: 'true',
        archived: 'false',
        keyword: 'procurement',
        nullVal: null,
      };

      component.updateChange(rawChange);

      expect(emitSpy).toHaveBeenCalledWith({
        active: true,
        archived: false,
        keyword: 'procurement',
      });
    });

    it('convertToParam and getUrlParams should handle query strings correctly', () => {
      const emptyParams = component.convertToParam({});
      expect(emptyParams).toBe('');

      const params = component.convertToParam({
        keyword: 'test',
        status: 'false',
        empty: '',
      });
      expect(params).toEqual({
        keyword: 'test',
        status: null,
        empty: null,
      });
    });
  });

  describe('Horizontal Filter Dialog', () => {
    let component: SdsFiltersComponent;
    let fixture: ComponentFixture<SdsFiltersComponent>;
    let dialogCloseSpy: ReturnType<typeof vi.fn>;
    let dialogAfterClosedSubject: Subject<any>;
    let mockDialogService: { open: ReturnType<typeof vi.fn> };

    beforeEach(() => {
      dialogCloseSpy = vi.fn();
      dialogAfterClosedSubject = new Subject<any>();

      const mockDialogRef = {
        afterClosed: () => dialogAfterClosedSubject.asObservable(),
        close: dialogCloseSpy,
      };

      mockDialogService = {
        open: vi.fn().mockReturnValue(mockDialogRef),
      };

      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes([]),
          SdsFormlyModule,
          FormlyModule,
        ],
        declarations: [
          SdsFiltersComponent,
          UsaIconStubComponent,
          SdsAdvancedFiltersStubComponent,
          SdsFormlyResetStubComponent,
        ],
        providers: [{ provide: SdsDialogService, useValue: mockDialogService }],
      });

      fixture = TestBed.createComponent(SdsFiltersComponent);
      component = fixture.componentInstance;
      component.fields = [
        {
          key: 'category',
          hide: true,
          props: { label: 'Category', group: 'popover' },
          fieldGroup: [{ key: 'subCat', hide: true, props: { label: 'Sub Category' } }],
        },
      ];
      component.model = { category: { subCat: 'hardware' } };
      component.form = new UntypedFormGroup({});
    });

    it('openDialog should convert popover groups to accordion, unhide fields, and open dialog', () => {
      component.openDialog();

      expect(mockDialogService.open).toHaveBeenCalled();
      const openArgs = mockDialogService.open.mock.calls[0][1];
      const dialogFields = openArgs.data.fields;

      expect(dialogFields[0].props.group).toBe('accordion');
      expect(dialogFields[0].hide).toBe(false);
      expect(dialogFields[0].fieldGroup[0].hide).toBe(false);
    });

    it('openDialog should handle afterClosed when result is returned', fakeAsync(() => {
      const modelChangeSpy = vi.spyOn(component, 'onModelChange');
      component.openDialog();

      dialogAfterClosedSubject.next({ category: { subCat: 'software' } });
      dialogAfterClosedSubject.complete();
      tick();

      expect(modelChangeSpy).toHaveBeenCalledWith({ category: { subCat: 'software' } });
      expect(component.dialogRef).toBeNull();
    }));

    it('openDialog should restore snapshot when afterClosed returns null', fakeAsync(() => {
      component.openDialog();
      component.model.category.subCat = 'changedWhileOpen';

      dialogAfterClosedSubject.next(null);
      dialogAfterClosedSubject.complete();
      tick();

      expect(component.model.category.subCat).toBe('hardware');
      expect(component.dialogRef).toBeNull();
    }));

    it('close and applyDialogFilters should call dialogRef.close', () => {
      component.openDialog();

      component.close();
      expect(dialogCloseSpy).toHaveBeenCalled();

      component.applyDialogFilters();
      expect(dialogCloseSpy).toHaveBeenCalledWith(component.model);
    });
  });

  describe('Chips Generation and Removal', () => {
    let component: SdsFiltersComponent;
    let fixture: ComponentFixture<SdsFiltersComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes([]),
          SdsFormlyModule,
          FormlyModule,
          SdsReadonlyModule,
        ],
        declarations: [
          SdsFiltersComponent,
          UsaIconStubComponent,
          SdsAdvancedFiltersStubComponent,
          SdsFormlyResetStubComponent,
        ],
        providers: [SDSFormlyUpdateComunicationService, DatePipe],
      });
      TestBed.overrideComponent(FormlyFieldInputComponent, {
        set: {
          template:
            '<input [id]="id" [formControl]="formControl" [type]="props.inputType ? props.inputType : \'text\'" class="usa-input" />',
        },
      });

      fixture = TestBed.createComponent(SdsFiltersComponent);
      component = fixture.componentInstance;
    });

    it('should set displayChips to horizontal when displayChips is undefined', () => {
      component.horizontal = true;
      component.fields = [];
      component.form = new UntypedFormGroup({});
      component.ngOnInit();
      expect(component.displayChips).toBe(true);
    });

    it('should generate chips for primitive, array, and object filter values', () => {
      const inputControl = new UntypedFormControl('sampleKeyword');
      const multiControl = new UntypedFormControl(['tag1', 'tag2']);
      const checkControl = new UntypedFormControl({ optA: true, optB: false });

      component.fields = [
        {
          key: 'keyword',
          type: 'input',
          props: { label: 'Keyword' },
          formControl: inputControl,
        },
        {
          key: 'tags',
          type: 'multicheckbox',
          props: {
            label: 'Tags',
            options: [
              { value: 'tag1', label: 'Tag 1' },
              { value: 'tag2', label: 'Tag 2' },
            ],
          },
          formControl: multiControl,
        },
        {
          key: 'options',
          type: 'checkbox',
          props: { label: 'Options' },
          formControl: checkControl,
        },
      ];

      component.form = new UntypedFormGroup({
        keyword: inputControl,
        tags: multiControl,
        options: checkControl,
      });

      component.model = {
        keyword: 'sampleKeyword',
        tags: ['tag1', 'tag2'],
        options: { optA: true, optB: false },
      };

      component.displayChips = true;
      component.updateChange(component.model);

      expect(component.chips.length).toBe(4);
      expect(component.chips.some((c) => c.formlyKey === 'keyword')).toBe(true);
      expect(component.chips.filter((c) => c.formlyKey === 'tags').length).toBe(2);
      expect(component.chips.some((c: any) => c.formlyKey === 'options' && c.srValue === 'optA')).toBe(true);
    });

    it('removeChip should throw an error if the field is not found', () => {
      component.fields = [];
      const fakeChip: any = { formlyKey: 'nonExistent' };
      expect(() => component.removeChip(fakeChip)).toThrowError('Error: unable to find field to remove chip');
    });

    it('removeChip should reset primitive form control', () => {
      const inputControl = new UntypedFormControl('myKeyword');
      const resetSpy = vi.spyOn(inputControl, 'reset');
      const field: FormlyFieldConfig = {
        key: 'keyword',
        type: 'input',
        props: { label: 'Keyword' },
        formControl: inputControl,
      };

      component.fields = [field];
      component.chips = [
        {
          formlyKey: 'keyword',
          formlyType: 'input' as any,
          label: 'Keyword',
          value: 'myKeyword',
          readonlyOptions: {} as any,
        },
      ];

      component.removeChip(component.chips[0]);
      expect(resetSpy).toHaveBeenCalled();
    });

    it('removeChip should reset datepicker controls for daterangepicker', () => {
      const fromDateCtrl = new UntypedFormControl('2024-01-01');
      const toDateCtrl = new UntypedFormControl('2024-01-31');
      const fromResetSpy = vi.spyOn(fromDateCtrl, 'reset');
      const toResetSpy = vi.spyOn(toDateCtrl, 'reset');

      const daterangeField: FormlyFieldConfig = {
        key: 'dateRange',
        type: SdsFormlyTypes.DATERANGEPICKER,
        formControl: new UntypedFormControl({ fromDate: '2024-01-01', toDate: '2024-01-31' }),
        fieldGroup: [
          { key: 'fromDate', formControl: fromDateCtrl },
          { key: 'toDate', formControl: toDateCtrl },
        ],
      };

      component.fields = [daterangeField];
      const chip: any = {
        formlyKey: 'dateRange',
        formlyType: SdsFormlyTypes.DATERANGEPICKER,
        value: { fromDate: '2024-01-01', toDate: '2024-01-31' },
      };
      component.chips = [chip];

      component.removeChip(chip);

      expect(fromResetSpy).toHaveBeenCalled();
      expect(toResetSpy).toHaveBeenCalled();
    });

    it('removeChip should update array control and model', () => {
      const arrayCtrl = new UntypedFormControl(['apple', 'banana']);
      const patchValueSpy = vi.spyOn(arrayCtrl, 'patchValue');
      const filterChangeSpy = vi.spyOn(component.filterChange, 'emit');

      const arrayField: FormlyFieldConfig = {
        key: 'fruits',
        type: 'multicheckbox',
        props: { label: 'Fruits' },
        formControl: arrayCtrl,
      };

      component.fields = [arrayField];
      component.model = { fruits: ['apple', 'banana'] };

      const chipApple: any = {
        formlyKey: 'fruits',
        label: 'Fruits',
        value: ['apple'],
      };
      const chipBanana: any = {
        formlyKey: 'fruits',
        label: 'Fruits',
        value: ['banana'],
      };
      component.chips = [chipApple, chipBanana];

      component.removeChip(chipApple);

      expect(patchValueSpy).toHaveBeenCalledWith(['banana']);
      expect(component.model.fruits).toEqual(['banana']);
      expect(filterChangeSpy).toHaveBeenCalledWith(component.model);
    });

    it('removeChip should update object / multicheckbox control and remove empty object property', () => {
      const objCtrl = new UntypedFormControl({ item1: true });
      const patchValueSpy = vi.spyOn(objCtrl, 'patchValue');

      const objField: FormlyFieldConfig = {
        key: 'items',
        type: 'multicheckbox',
        props: { label: 'Items' },
        formControl: objCtrl,
      };

      component.fields = [objField];
      component.model = { items: { item1: true } };

      const chipItem1: any = {
        formlyKey: 'items',
        label: 'Items',
        value: { item1: true },
      };
      component.chips = [chipItem1];

      component.removeChip(chipItem1);

      expect(patchValueSpy).toHaveBeenCalledWith({});
      // Empty object was removed by setParentWithProperty
      expect(component.model.items).toBeUndefined();
    });

    it('removeChip should update multicheckbox control when multiple chips exist for the field', () => {
      const objCtrl = new UntypedFormControl({ item1: true, item2: true });
      const patchValueSpy = vi.spyOn(objCtrl, 'patchValue');

      const objField: FormlyFieldConfig = {
        key: 'items',
        type: 'multicheckbox',
        props: { label: 'Items' },
        formControl: objCtrl,
      };

      component.fields = [objField];
      component.model = { items: { item1: true, item2: true } };

      const chipItem1: any = {
        formlyKey: 'items',
        label: 'Items',
        value: { item1: true },
      };
      const chipItem2: any = {
        formlyKey: 'items',
        label: 'Items',
        value: { item2: true },
      };
      component.chips = [chipItem1, chipItem2];

      component.removeChip(chipItem1);

      expect(patchValueSpy).toHaveBeenCalledWith({ item2: true });
      expect(component.model.items).toEqual({ item2: true });
    });

    it('checkForHide should unhide parent fieldGroup and child field when child key has value', () => {
      component.fields = [
        {
          key: 'organization',
          hide: true,
          props: { label: 'Organization' },
          fieldGroup: [
            {
              key: 'division',
              hide: true,
              props: { label: 'Division' },
            },
          ],
        },
      ];
      component.model = { organization: { division: 'Engineering' } };

      component.checkForHide();

      expect(component.fields[0].hide).toBe(false);
      expect(component.fields[0].fieldGroup[0].hide).toBe(false);
    });

    it('findFieldInFieldGroup should recursively search deeply nested fieldGroups', () => {
      const deepField: FormlyFieldConfig = { key: 'deepChild', props: { label: 'Deep' } };
      component.fields = [
        {
          key: 'top',
          hide: true,
          props: { label: 'Top' },
          fieldGroup: [
            {
              key: 'mid',
              hide: true,
              props: { label: 'Mid' },
              fieldGroup: [deepField],
            },
          ],
        },
      ];
      component.model = { top: { mid: { deepChild: 'foundValue' } } };

      component.checkForHide();

      expect(component.fields[0].hide).toBe(false);
    });

    it('should generate chips for daterangepicker field', () => {
      const daterangeField: FormlyFieldConfig = {
        key: 'dateRange',
        type: SdsFormlyTypes.DATERANGEPICKER,
        props: { label: 'Date Range' },
        fieldGroup: [
          { key: 'fromDate', formControl: new UntypedFormControl('2024-01-01') },
          { key: 'toDate', formControl: new UntypedFormControl('2024-01-31') },
        ],
      };

      component.fields = [daterangeField];
      component.model = {
        dateRange: { fromDate: '2024-01-01', toDate: '2024-01-31' },
      };
      component.displayChips = true;

      component.updateChange(component.model);

      expect(component.chips.some((c) => c.formlyKey === 'dateRange')).toBe(true);
    });

    it('removeChip should handle non-multicheckbox object fields with multiple chips', () => {
      const objCtrl = new UntypedFormControl({ keyA: 'valA', keyB: 'valB' });
      const patchValueSpy = vi.spyOn(objCtrl, 'patchValue');

      const customField: FormlyFieldConfig = {
        key: 'customObject',
        type: 'checkbox',
        props: { label: 'Custom' },
        formControl: objCtrl,
      };

      component.fields = [customField];
      component.model = { customObject: { keyA: 'valA', keyB: 'valB' } };

      const chipA: any = {
        formlyKey: 'customObject',
        label: 'Custom',
        value: { keyA: 'valA' },
      };
      const chipB: any = {
        formlyKey: 'customObject',
        label: 'Custom',
        value: { keyB: 'valB' },
      };
      component.chips = [chipA, chipB];

      component.removeChip(chipA);

      expect(patchValueSpy).toHaveBeenCalledWith({ keyB: 'valB' });
      expect(component.model.customObject).toEqual({ keyB: 'valB' });
    });

    it('setParentWithProperty should recurse into nested objects', () => {
      const target = {
        level1: {
          level2: {
            targetProp: 'initial',
          },
        },
      };

      component.setParentWithProperty(target, 'targetProp', { updated: true });
      expect(target.level1.level2.targetProp).toEqual({ updated: true });
    });
  });
});
