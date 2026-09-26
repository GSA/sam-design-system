import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SdsFormlyTypes } from '../models/formly-types';
import { ReadonlyContainerComponent } from './readonly-container.component';
import { SdsReadonlyModule } from './readonly.module';

@Component({
  template: `
    <sds-readonly-container
      [formlyFieldConfig]="fieldConfig"
      [formlyType]="formlyType"
      [label]="label"
      [value]="value"
      [additionalConfig]="additionalConfig"
    >
      <ng-template *ngIf="useCustomLabel" sdsReadonlyLabel let-props>
        <span class="custom-label">Custom: {{ props?.label }}</span>
      </ng-template>
      <ng-template *ngIf="useCustomValue" sdsReadonlyValue let-val>
        <span class="custom-value">Custom Val: {{ val }}</span>
      </ng-template>
    </sds-readonly-container>
  `,
  standalone: false,
})
class TestHostComponent {
  fieldConfig?: FormlyFieldConfig;
  formlyType?: string;
  label?: string;
  value?: any;
  additionalConfig: any = {};
  useCustomLabel = false;
  useCustomValue = false;
}

describe('ReadonlyContainerComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [SdsReadonlyModule],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  describe('label rendering', () => {
    it('should display default label with tag text and default class', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.INPUT,
        props: {
          label: 'Default Label',
          tagText: 'TagInfo',
        },
        formControl: new UntypedFormControl('test'),
      };
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl).toBeTruthy();
      expect(labelEl.nativeElement.textContent).toContain('Default Label');

      const tagEl = fixture.debugElement.query(By.css('.usa-tag'));
      expect(tagEl).toBeTruthy();
      expect(tagEl.nativeElement.textContent.trim()).toBe('TagInfo');
      expect(tagEl.nativeElement.classList.contains('sds-tag--info-white')).toBe(true);
    });

    it('should apply custom tagClass when specified', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.INPUT,
        props: {
          label: 'Default Label',
          tagText: 'CustomTag',
          tagClass: 'sds-tag--custom',
        },
        formControl: new UntypedFormControl('test'),
      };
      fixture.detectChanges();

      const tagEl = fixture.debugElement.query(By.css('.usa-tag'));
      expect(tagEl.nativeElement.classList.contains('sds-tag--custom')).toBe(true);
    });

    it('should render custom sdsReadonlyLabel template when provided', () => {
      host.useCustomLabel = true;
      host.fieldConfig = {
        type: SdsFormlyTypes.INPUT,
        props: {
          label: 'My Input Label',
        },
        formControl: new UntypedFormControl('val'),
      };
      fixture.detectChanges();

      const customLabel = fixture.debugElement.query(By.css('.custom-label'));
      expect(customLabel).toBeTruthy();
      expect(customLabel.nativeElement.textContent).toBe('Custom: My Input Label');
    });
  });

  describe('formly types via formlyFieldConfig', () => {
    it('should handle INPUT type', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.INPUT,
        props: { label: 'Input Field' },
        formControl: new UntypedFormControl('Input Val'),
      };
      fixture.detectChanges();

      const inputComp = fixture.debugElement.query(By.css('sds-readonly-input'));
      expect(inputComp).toBeTruthy();
      expect(inputComp.nativeElement.textContent).toContain('Input Val');
    });

    it('should handle TEXTAREA type', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.TEXTAREA,
        props: { label: 'Textarea Field' },
        formControl: new UntypedFormControl('Textarea Val'),
      };
      fixture.detectChanges();

      const inputComp = fixture.debugElement.query(By.css('sds-readonly-input'));
      expect(inputComp).toBeTruthy();
      expect(inputComp.nativeElement.textContent).toContain('Textarea Val');
    });

    it('should handle READONLY type', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.READONLY,
        props: { label: 'Readonly Field' },
        formControl: new UntypedFormControl('Readonly Val'),
      };
      fixture.detectChanges();

      const inputComp = fixture.debugElement.query(By.css('sds-readonly-input'));
      expect(inputComp).toBeTruthy();
      expect(inputComp.nativeElement.textContent).toContain('Readonly Val');
    });

    it('should handle SEARCH type passing value.searchText', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.SEARCH,
        props: { label: 'Search Field' },
        formControl: new UntypedFormControl({ searchText: 'Search Term' }),
      };
      fixture.detectChanges();

      const inputComp = fixture.debugElement.query(By.css('sds-readonly-input'));
      expect(inputComp).toBeTruthy();
      expect(inputComp.nativeElement.textContent).toContain('Search Term');
    });

    it('should handle DATEPICKER type', () => {
      const date = new Date(2025, 5, 15);
      host.fieldConfig = {
        type: SdsFormlyTypes.DATEPICKER,
        props: { label: 'Date Field' },
        formControl: new UntypedFormControl(date),
      };
      fixture.detectChanges();

      const datepickerComp = fixture.debugElement.query(By.css('sds-readonly-datepicker'));
      expect(datepickerComp).toBeTruthy();
      expect(datepickerComp.nativeElement.textContent).toContain('Jun 15, 2025');
    });

    it('should handle SELECT type with provided options', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.SELECT,
        props: {
          label: 'Select Field',
          options: [
            { label: 'Option One', value: '1' },
            { label: 'Option Two', value: '2' },
          ],
        },
        formControl: new UntypedFormControl('2'),
      };
      fixture.detectChanges();

      const selectComp = fixture.debugElement.query(By.css('sds-readonly-select'));
      expect(selectComp).toBeTruthy();
      expect(selectComp.nativeElement.textContent).toContain('Option Two');
    });

    it('should handle RADIO type with provided options', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.RADIO,
        props: {
          label: 'Radio Field',
          options: [
            { label: 'Choice A', value: 'a' },
            { label: 'Choice B', value: 'b' },
          ],
        },
        formControl: new UntypedFormControl('a'),
      };
      fixture.detectChanges();

      const radioComp = fixture.debugElement.query(By.css('sds-readonly-radio'));
      expect(radioComp).toBeTruthy();
      expect(radioComp.nativeElement.textContent).toContain('Choice A');
    });

    it('should handle FILEINFO type with options', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.FILEINFO,
        props: {
          label: 'File Field',
          options: [{ label: 'Document', value: 'doc.pdf' }],
        },
        formControl: new UntypedFormControl('doc.pdf'),
      };
      fixture.detectChanges();

      const fileinfoComp = fixture.debugElement.query(By.css('sds-readonly-fileinfo'));
      expect(fileinfoComp).toBeTruthy();
      // ReadonlyFileinfoComponent requires ngOnChanges to run
      fileinfoComp.componentInstance.ngOnChanges();
      fixture.detectChanges();
      expect(fileinfoComp.nativeElement.textContent).toContain('Document - doc.pdf');
    });

    it('should handle AUTOCOMPLETE type with props.configuration', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.AUTOCOMPLETE,
        props: {
          label: 'Autocomplete Field',
          configuration: {
            primaryTextField: 'name',
            id: 'test',
          },
        },
        formControl: new UntypedFormControl([{ name: 'Item 1' }, { name: 'Item 2' }]),
      };
      fixture.detectChanges();

      const autocompleteComp = fixture.debugElement.query(By.css('sds-readonly-autocomplete'));
      expect(autocompleteComp).toBeTruthy();
      expect(autocompleteComp.nativeElement.textContent).toContain('Item 1, Item 2');
    });

    it('should handle CHECKBOX type', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.CHECKBOX,
        props: { label: 'Checkbox Field' },
        formControl: new UntypedFormControl(true),
      };
      fixture.detectChanges();

      const checkboxComp = fixture.debugElement.query(By.css('sds-readonly-checkbox'));
      expect(checkboxComp).toBeTruthy();
      expect(checkboxComp.nativeElement.textContent).toContain('Checked');
    });

    it('should handle MULTICHECKBOX type with options', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.MULTICHECKBOX,
        props: {
          label: 'Multicheckbox Field',
          options: [
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
          ],
        },
        formControl: new UntypedFormControl({ red: true, blue: false }),
      };
      fixture.detectChanges();

      const multiComp = fixture.debugElement.query(By.css('sds-readonly-multicheckbox'));
      expect(multiComp).toBeTruthy();
      expect(multiComp.nativeElement.textContent).toContain('Red');
      expect(multiComp.nativeElement.textContent).not.toContain('Blue');
    });

    it('should handle DATERANGEPICKER type extracting fieldGroup keys', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.DATERANGEPICKER,
        props: { label: 'Date Range Field' },
        fieldGroup: [{ key: 'start' }, { key: 'end' }] as any,
        formControl: new UntypedFormControl({
          start: new Date(2025, 0, 1),
          end: new Date(2025, 0, 10),
        }),
      };
      fixture.detectChanges();

      const daterangeComp = fixture.debugElement.query(By.css('sds-readonly-daterange'));
      expect(daterangeComp).toBeTruthy();
      expect(daterangeComp.nativeElement.textContent).toContain('Jan 1, 2025');
      expect(daterangeComp.nativeElement.textContent).toContain('Jan 10, 2025');
    });

    it('should handle DATERANGEPICKERV2 type extracting fieldGroup keys', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.DATERANGEPICKERV2,
        props: { label: 'Date Range V2 Field' },
        fieldGroup: [{ key: 'start' }, { key: 'end' }] as any,
        formControl: new UntypedFormControl({
          start: new Date(2025, 2, 1),
          end: new Date(2025, 2, 15),
        }),
      };
      fixture.detectChanges();

      const daterangeComp = fixture.debugElement.query(By.css('sds-readonly-daterange'));
      expect(daterangeComp).toBeTruthy();
      expect(daterangeComp.nativeElement.textContent).toContain('Mar 1, 2025');
      expect(daterangeComp.nativeElement.textContent).toContain('Mar 15, 2025');
    });

    it('should handle DATERANGEPICKERV2 type with default keys when fieldGroup is not defined', () => {
      host.fieldConfig = {
        type: SdsFormlyTypes.DATERANGEPICKERV2,
        props: { label: 'Date Range V2 Field' },
        formControl: new UntypedFormControl({
          fromDate: new Date(2025, 2, 1),
          toDate: new Date(2025, 2, 15),
        }),
      };
      fixture.detectChanges();

      const daterangeComp = fixture.debugElement.query(By.css('sds-readonly-daterange'));
      expect(daterangeComp).toBeTruthy();
      expect(daterangeComp.nativeElement.textContent).toContain('Mar 1, 2025');
      expect(daterangeComp.nativeElement.textContent).toContain('Mar 15, 2025');
    });
  });

  describe('direct inputs without formlyFieldConfig', () => {
    it('should handle direct inputs when formlyFieldConfig is not provided', () => {
      host.formlyType = SdsFormlyTypes.DATERANGEPICKERV2;
      host.label = 'Range V2';
      host.value = {
        fromDate: new Date(2025, 2, 1),
        toDate: new Date(2025, 2, 15),
      };
      fixture.detectChanges();

      const daterangeComp = fixture.debugElement.query(By.css('sds-readonly-daterange'));
      expect(daterangeComp).toBeTruthy();
      expect(daterangeComp.nativeElement.textContent).toContain('Mar 1, 2025');
      expect(daterangeComp.nativeElement.textContent).toContain('Mar 15, 2025');
    });
  });

  describe('custom value template', () => {
    it('should pass valueTemplate to readonly components', () => {
      host.useCustomValue = true;
      host.fieldConfig = {
        type: SdsFormlyTypes.INPUT,
        props: { label: 'Input Field' },
        formControl: new UntypedFormControl('Templated Value'),
      };
      fixture.detectChanges();

      const customVal = fixture.debugElement.query(By.css('.custom-value'));
      expect(customVal).toBeTruthy();
      expect(customVal.nativeElement.textContent).toBe('Custom Val: Templated Value');
    });
  });
});
