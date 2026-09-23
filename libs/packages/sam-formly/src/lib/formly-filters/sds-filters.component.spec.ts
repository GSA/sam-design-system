import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule } from '../formly/formly.module';
import { SdsFiltersComponent } from './sds-filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component as StubComponent, DebugElement, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { FormlyFieldInputComponent } from '../formly/types/input';

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
});
