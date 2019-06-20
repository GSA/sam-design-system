
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


describe('The Sam Filters Component', () => {

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
                    wrappers: ['accordianwrapper'],
                    templateOptions: { label: 'Entity Name/UEI' },
                    fieldGroup: [{
                        key: 'uniqueId',
                        type: 'input',
                        templateOptions: {
                            required: true,
                            label: 'Formly input type number',
                            placeholder: 'placeholder',
                            min: 13,
                            max: 40,
                            inputType: 'number',
                            inputStyle: 'error',
                            errorMessage: 'Helpful error message'
                        },

                    }]
                },
            ];
            component.form = new FormGroup({});
            component.model = { test: null };
        });

        it('input type should be text', () => {
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input'));
            expect(inputField.nativeElement.type).toBe('number');
        });
    });
});
