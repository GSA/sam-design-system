import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SdsFiltersModule } from './sds-filters.module';
import { SdsFormlyModule } from '../formly/formly.module';
import { SdsFiltersComponent } from './sds-filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';

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
          SdsFiltersModule
        ],
        providers: [SDSFormlyUpdateComunicationService]
      });
      router = TestBed.get(Router);
      location = TestBed.get(Location);

      fixture = TestBed.createComponent(SdsFiltersComponent);
      router.initialNavigation();
      component = fixture.componentInstance;
      component.fields = [
        {
          key: 'filters',
          wrappers: ['accordionwrapper'],
          templateOptions: { label: 'Entity Name/UEI' },
          fieldGroup: [
            {
              key: 'uniqueId',
              type: 'input',
              templateOptions: {
                required: true,
                label: 'Formly input type number',
                placeholder: 'placeholder',
                min: 13,
                max: 400,
                minLength: 2,
                maxLength: 4,
                inputType: 'number',
                inputStyle: 'error',
                errorMessage: 'Helpful error message'
              },
              validation: {
                show: true
              }
            }
          ]
        }
      ];
      component.form = new FormGroup({});
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

    it('should route the navigation', fakeAsync(() => {
      component.model = {
        filter: {
          entityType: '30'
        }
      };
      component.fields = [
        {
          key: 'filter',
          wrappers: ['filterwrapper'],
          templateOptions: { label: 'Entity Types' },
          fieldGroup: [
            {
              key: 'entityType',
              type: 'radio',
              templateOptions: {
                label: 'Expiration Date',
                options: [
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' }
                ]
              }
            }
          ]
        }
      ];
      fixture.detectChanges();
      component.onModelChange(component.model);
      tick();
      fixture.detectChanges();
      expect(location.path()).toContain('/?sfm');
    }));

    it('should not change the route when history set to false', fakeAsync(() => {
      component.model = {
        filter: {
          entityType: '30'
        }
      };
      component.fields = [
        {
          key: 'filter',
          wrappers: ['filterwrapper'],
          templateOptions: { label: 'Entity Types' },
          fieldGroup: [
            {
              key: 'entityType',
              type: 'radio',
              templateOptions: {
                label: 'Expiration Date',
                options: [
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' }
                ]
              }
            }
          ]
        }
      ];
      fixture.detectChanges();
      component.isHistoryEnable = false;
      component.onModelChange(component.model);
      tick();
      fixture.detectChanges();
      expect(location.path()).toBe('');
    }));
    it('should call coominication service', () => {
      component.model = {
        filter: {
          entityType: '30'
        }
      };
      component.fields = [
        {
          key: 'filter',
          wrappers: ['filterwrapper'],
          templateOptions: { label: 'Entity Types' },
          fieldGroup: [
            {
              key: 'entityType',
              type: 'radio',
              templateOptions: {
                label: 'Expiration Date',
                options: [
                  { label: '30 Days', value: '30' },
                  { label: '60 Days', value: '60' },
                  { label: '90 Days', value: '90' }
                ]
              }
            }
          ]
        }
      ];
      const service = fixture.debugElement.injector.get(
        SDSFormlyUpdateComunicationService
      );
      const serviceSpy = spyOn(service, 'updateFilter').and.callThrough(); // create spy
      component.updateChange(component.model);
      fixture.detectChanges();
      expect(serviceSpy).toHaveBeenCalled();
      expect(service.updateFilter).toHaveBeenCalled();
    });
    it('should return new Object with some properties as null based on base Object', () => {
      component.form = new FormGroup({
        test: new FormControl(''),
        filters: new FormControl(''),
        searchEntity: new FormControl('')
      });
      component.form.controls['filters'].setValue([
        { uniqueId: 1 },
        { uniqueId: 1 }
      ]);
      const updateFormValue = { test: 'abc', filters: { uniqueId: 2 } };
      const expectedOutput = {
        test: 'abc',
        filters: { uniqueId: 2 },
        searchEntity: null
      };
      const result = component.overwrite(
        component.form.getRawValue(),
        updateFormValue
      );
      console.log(result);
      expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedOutput));
    });
    it('should update the form value to null values if ref param is empty when back button is pressed ', () => {
      component.form = new FormGroup({
        test: new FormControl(''),
        filters: new FormControl('')
      });
      component.form.controls['test'].setValue('abc');
      component.form.controls['filters'].setValue({ uniqueId: 1 });
      window.dispatchEvent(new Event('popstate'));
      const obj = { test: null, filters: {} };
      expect(JSON.stringify(component.form.value)).toEqual(JSON.stringify(obj));
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
          SdsFiltersModule
        ]
      });

      fixture = TestBed.createComponent(SdsFiltersComponent);
      component = fixture.componentInstance;
      component.fields = [
        {
          key: 'filters',
          wrappers: ['accordionwrapper'],
          templateOptions: { label: 'Entity Name/UEI' },
          fieldGroup: [
            {
              key: 'uniqueId',
              type: 'input',

              templateOptions: {
                required: true,
                label: 'Formly input type number',
                placeholder: 'placeholder',
                minLength: 2,
                maxLength: 4,
                inputType: 'number'
              },
              validation: {
                show: true
              }
            }
          ]
        }
      ];
      component.form = new FormGroup({});
    });
    it('validation value length should be between min length and max length', () => {
      component.model = { filters: { uniqueId: '4' } };
      fixture.detectChanges();

      const inputField = fixture.debugElement.query(
        By.css('.usa-input')
      ) as DebugElement;
      const err = fixture.debugElement.query(By.css('.usa-error-message'));
      inputField.nativeElement.value = '4';
      inputField.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.form.invalid).toBe(true);
    });

    it('value length should be between min length and max length', () => {
      component.model = { test: null, filters: { uniqueId: '45466' } };
      fixture.detectChanges();
      const inputField = fixture.debugElement.query(
        By.css('.usa-input')
      ) as DebugElement;
      inputField.nativeElement.value = '45466';
      inputField.nativeElement.dispatchEvent(new Event('input'));
      expect(component.form.invalid).toBe(true);
    });

    it('should change the hide value when model has value', () => {
      component.fields = [
        {
          key: 'filters',
          wrappers: ['accordionwrapper'],
          templateOptions: { label: 'Entity Name/UEI' },
          fieldGroup: [
            {
              key: 'uniqueId',
              type: 'input',
              hide: true,
              templateOptions: {
                required: true,
                label: 'Formly input type number',
                placeholder: 'placeholder',
                minLength: 2,
                maxLength: 4,
                inputType: 'number'
              },
              validation: {
                show: true
              }
            }
          ]
        }
      ];
      component.model = { test: null, filters: { uniqueId: '45466' } };
      fixture.detectChanges();
      expect(component.fields[0].fieldGroup[0].hide).toBe(false);
    });
    it('should change the hide value when model has value', () => {
      component.fields = [
        {
          key: 'filters',
          type: 'input',
          hide: true,
          templateOptions: {
            label: 'State',
            description: 'State'
          }
        }
      ];
      component.model = { filters: '45466' };
      fixture.detectChanges();
      expect(component.fields[0].hide).toBe(false);
    });
  });
});
