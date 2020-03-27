
import {
    TestBed,
    ComponentFixture
} from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SdsFiltersModule } from './sds-filters.module';
import { SdsFormlyModule } from '../formly/formly.module';
import {
    SdsFiltersComponent
} from './sds-filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';


xdescribe('The Sam Filters Component', () => {

    describe('rendered tests', () => {
        let component: SdsFiltersComponent;
        let fixture: ComponentFixture<SdsFiltersComponent>;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    SdsFormlyModule,
                    SdsFiltersModule
                ],

            });

            fixture = TestBed.createComponent(SdsFiltersComponent);
            component = fixture.componentInstance;
            component.fields = [
                {
                    key: 'filters',
                    wrappers: ['accordionwrapper'],
                    templateOptions: { label: 'Entity Name/UEI' },
                    fieldGroup: [{
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
                            show: true,
                        },

                    }]
                },
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
            const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
            const err = fixture.debugElement.query(By.css('.usa-error-message'));

            expect(inputField.nativeElement.value).toBe('12');
            expect(component.form.invalid).toBe(true);
        });
        it('input value cannot be greter than max', () => {
            component.model = { test: null, filters: { uniqueId: 401 } };
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
            const err = fixture.debugElement.query(By.css('.usa-error-message'));

            expect(inputField.nativeElement.value).toBe('401');
            expect(component.form.invalid).toBe(true);
        });
        it('input value length should be between min length and max length', () => {
            component.model = { test: null, filters: { uniqueId: 231 } };
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
            expect(inputField.nativeElement.value.length).toBe(3);
        });
        it('input value length should be between min length and max length', () => {
            component.model = { test: null, filters: { uniqueId: 1 } };
            fixture.detectChanges();
            expect(component.form.invalid).toBe(true);
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
                    SdsFormlyModule,
                    SdsFiltersModule
                ],

            });

            fixture = TestBed.createComponent(SdsFiltersComponent);
            component = fixture.componentInstance;
            component.fields = [
                {
                    key: 'filters',
                    wrappers: ['accordionwrapper'],
                    templateOptions: { label: 'Entity Name/UEI' },
                    fieldGroup: [{
                        key: 'uniqueId',
                        type: 'input',


                        templateOptions: {
                            required: true,
                            label: 'Formly input type number',
                            placeholder: 'placeholder',
                            minLength: 2,
                            maxLength: 4,
                            inputType: 'number',
                        },
                        validation: {
                            show: true,
                        },

                    }]
                },
            ];
            component.form = new FormGroup({});

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
    });
});
