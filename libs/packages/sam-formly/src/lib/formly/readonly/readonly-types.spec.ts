import { DatePipe } from '@angular/common';
import { Component, SimpleChange, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SdsReadonlyModule } from './readonly.module';
import { ReadonlyAutocompleteComponent } from './readonly-types/readonly-autocomplete';
import { ReadonlyCheckboxComponent } from './readonly-types/readonly-checkbox';
import { ReadonlyDatepickerComponent } from './readonly-types/readonly-datepicker';
import { ReadonlyDaterangeComponent } from './readonly-types/readonly-daterange';
import { ReadonlyFileinfoComponent } from './readonly-types/readonly-fileinfo';
import { ReadonlyInputComponent } from './readonly-types/readonly-input';
import { ReadonlyMulticheckboxComponent } from './readonly-types/readonly-multicheckbox';
import { ReadonlyRadioComponent } from './readonly-types/readonly-radio';
import { ReadonlySelectComponent } from './readonly-types/readonly-select';

@Component({
  template: `
    <ng-template #customValTpl let-val>
      <span class="custom-val">Custom: {{ val }}</span>
    </ng-template>
  `,
  standalone: false,
})
class TemplateHostComponent {
  @ViewChild('customValTpl', { static: true }) customValTpl: TemplateRef<any>;
}

describe('Readonly Type Components', () => {
  let templateHost: TemplateHostComponent;
  let templateFixture: ComponentFixture<TemplateHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateHostComponent],
      imports: [SdsReadonlyModule, FormlySelectModule],
      providers: [DatePipe],
    });

    templateFixture = TestBed.createComponent(TemplateHostComponent);
    templateHost = templateFixture.componentInstance;
    templateFixture.detectChanges();
  });

  describe('ReadonlyInputComponent', () => {
    let fixture: ComponentFixture<ReadonlyInputComponent>;
    let component: ReadonlyInputComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ReadonlyInputComponent);
      component = fixture.componentInstance;
    });

    it('should display value when present', () => {
      component.value = 'Test Value';
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('Test Value');
    });

    it('should display mdash when value is empty or falsy', () => {
      component.value = '';
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('—');
    });

    it('should render custom valueTemplate when provided', () => {
      component.value = 'Custom Value';
      component.valueTemplate = templateHost.customValTpl;
      fixture.detectChanges();

      const customEl = fixture.debugElement.query(By.css('.custom-val'));
      expect(customEl).toBeTruthy();
      expect(customEl.nativeElement.textContent).toBe('Custom: Custom Value');
    });
  });

  describe('ReadonlyDatepickerComponent', () => {
    let fixture: ComponentFixture<ReadonlyDatepickerComponent>;
    let component: ReadonlyDatepickerComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ReadonlyDatepickerComponent);
      component = fixture.componentInstance;
    });

    it('should display formatted date when value is present', () => {
      component.value = new Date(2025, 4, 20);
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent).toContain('May 20, 2025');
    });

    it('should display mdash when date is falsy', () => {
      component.value = null;
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('—');
    });

    it('should render custom valueTemplate', () => {
      component.value = new Date(2025, 4, 20);
      component.valueTemplate = templateHost.customValTpl;
      fixture.detectChanges();

      const customEl = fixture.debugElement.query(By.css('.custom-val'));
      expect(customEl).toBeTruthy();
    });
  });

  describe('ReadonlySelectComponent', () => {
    let fixture: ComponentFixture<ReadonlySelectComponent>;
    let component: ReadonlySelectComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ReadonlySelectComponent);
      component = fixture.componentInstance;
    });

    it('should throw error when selectOptions is missing or empty', () => {
      component.value = '1';
      expect(() => component.ngOnInit()).toThrowError(/No option list provided/);
    });

    it('should display mdash when value is falsy', () => {
      component.selectOptions = [{ label: 'Option A', value: 'a' }];
      component.value = '';
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('—');
    });

    it('should display matched option label', () => {
      component.selectOptions = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
      ];
      component.value = 'b';
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('Option B');
    });

    it('should display mdash when value is not found in selectOptions', () => {
      component.selectOptions = [{ label: 'Option A', value: 'a' }];
      component.value = 'nonexistent';
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('—');
    });

    it('should render custom valueTemplate with option label', () => {
      component.selectOptions = [{ label: 'Option A', value: 'a' }];
      component.value = 'a';
      component.valueTemplate = templateHost.customValTpl;
      component.ngOnInit();
      fixture.detectChanges();

      const customEl = fixture.debugElement.query(By.css('.custom-val'));
      expect(customEl.nativeElement.textContent).toBe('Custom: Option A');
    });
  });

  describe('ReadonlyRadioComponent', () => {
    let fixture: ComponentFixture<ReadonlyRadioComponent>;
    let component: ReadonlyRadioComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ReadonlyRadioComponent);
      component = fixture.componentInstance;
    });

    it('should throw error when radioOptions is empty', () => {
      component.value = 'a';
      expect(() => component.ngOnInit()).toThrowError(/No option list provided/);
    });

    it('should display mdash when value is falsy', () => {
      component.radioOptions = [{ label: 'Choice 1', value: '1' }];
      component.value = null;
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('—');
    });

    it('should display option label matching value', () => {
      component.radioOptions = [
        { label: 'Choice 1', value: '1' },
        { label: 'Choice 2', value: '2' },
      ];
      component.value = '2';
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold.display-block'));
      expect(span.nativeElement.textContent.trim()).toBe('Choice 2');
    });

    it('should render custom valueTemplate for radio option', () => {
      component.radioOptions = [{ label: 'Choice 1', value: '1' }];
      component.value = '1';
      component.valueTemplate = templateHost.customValTpl;
      component.ngOnInit();
      fixture.detectChanges();

      const customEl = fixture.debugElement.query(By.css('.custom-val'));
      expect(customEl.nativeElement.textContent).toBe('Custom: Choice 1');
    });
  });

  describe('ReadonlyAutocompleteComponent', () => {
    let fixture: ComponentFixture<ReadonlyAutocompleteComponent>;
    let component: ReadonlyAutocompleteComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ReadonlyAutocompleteComponent);
      component = fixture.componentInstance;
    });

    it('should throw error if autocompleteSettings or primaryTextField is missing', () => {
      component.value = [{ name: 'Test' }];
      expect(() => component.ngOnInit()).toThrowError(/Primary text field missing/);

      component.autocompleteSettings = {} as any;
      expect(() => component.ngOnInit()).toThrowError(/Primary text field missing/);
    });

    it('should display mdash when value is empty or falsy', () => {
      component.autocompleteSettings = { primaryTextField: 'name' } as any;
      component.value = [];
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('—');
    });

    it('should display comma-separated values using primaryTextField', () => {
      component.autocompleteSettings = { primaryTextField: 'name' } as any;
      component.value = [{ name: 'Alpha' }, { name: 'Beta' }, { name: 'Gamma' }];
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('Alpha, Beta, Gamma');
    });

    it('should render custom valueTemplate with joined displayValue', () => {
      component.autocompleteSettings = { primaryTextField: 'name' } as any;
      component.value = [{ name: 'Alpha' }];
      component.valueTemplate = templateHost.customValTpl;
      component.ngOnInit();
      fixture.detectChanges();

      const customEl = fixture.debugElement.query(By.css('.custom-val'));
      expect(customEl.nativeElement.textContent).toBe('Custom: Alpha');
    });
  });

  describe('ReadonlyCheckboxComponent', () => {
    let fixture: ComponentFixture<ReadonlyCheckboxComponent>;
    let component: ReadonlyCheckboxComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ReadonlyCheckboxComponent);
      component = fixture.componentInstance;
    });

    it('should display Checked when value is true', () => {
      component.value = true;
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('Checked');
    });

    it('should display Unchecked when value is false', () => {
      component.value = false;
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('Unchecked');
    });

    it('should render custom valueTemplate', () => {
      component.value = true;
      component.valueTemplate = templateHost.customValTpl;
      fixture.detectChanges();

      const customEl = fixture.debugElement.query(By.css('.custom-val'));
      expect(customEl.nativeElement.textContent).toBe('Custom: true');
    });
  });

  describe('ReadonlyMulticheckboxComponent', () => {
    let fixture: ComponentFixture<ReadonlyMulticheckboxComponent>;
    let component: ReadonlyMulticheckboxComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ReadonlyMulticheckboxComponent);
      component = fixture.componentInstance;
    });

    it('should throw error when multicheckboxOptions is empty', () => {
      component.value = { a: true };
      expect(() => component.ngOnInit()).toThrowError(/No option list provided/);
    });

    it('should display mdash when value is null or falsy', () => {
      component.multicheckboxOptions = [{ label: 'Opt 1', value: '1' }];
      component.value = null;
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('—');
    });

    it('should display checked options labels', () => {
      component.multicheckboxOptions = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
      ];
      component.value = { red: true, green: false, blue: true };
      component.ngOnInit();
      fixture.detectChanges();

      const spans = fixture.debugElement.queryAll(By.css('.text-bold.display-block'));
      expect(spans.length).toBe(2);
      expect(spans[0].nativeElement.textContent.trim()).toBe('Red');
      expect(spans[1].nativeElement.textContent.trim()).toBe('Blue');
    });

    it('should render custom valueTemplate for checked items', () => {
      component.multicheckboxOptions = [{ label: 'Item 1', value: '1' }];
      component.value = { '1': true };
      component.valueTemplate = templateHost.customValTpl;
      component.ngOnInit();
      fixture.detectChanges();

      const customEl = fixture.debugElement.query(By.css('.custom-val'));
      expect(customEl.nativeElement.textContent).toBe('Custom: Item 1');
    });
  });

  describe('ReadonlyDaterangeComponent', () => {
    let fixture: ComponentFixture<ReadonlyDaterangeComponent>;
    let component: ReadonlyDaterangeComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ReadonlyDaterangeComponent);
      component = fixture.componentInstance;
    });

    it('should format fromDate and toDate correctly', () => {
      component.value = {
        fromDate: new Date(2025, 0, 1),
        toDate: new Date(2025, 0, 15),
      };
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent).toContain('Jan 1, 2025');
      expect(span.nativeElement.textContent).toContain('Jan 15, 2025');
    });

    it('should format correctly when fromDate is missing', () => {
      component.value = {
        toDate: new Date(2025, 0, 15),
      };
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent).toContain('--');
      expect(span.nativeElement.textContent).toContain('Jan 15, 2025');
    });

    it('should format correctly when toDate is missing', () => {
      component.value = {
        fromDate: new Date(2025, 0, 1),
      };
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent).toContain('Jan 1, 2025');
      expect(span.nativeElement.textContent).not.toContain(' - ');
    });

    it('should support custom fromDateKey and toDateKey', () => {
      component.daterangepickerOptions = {
        fromDateKey: 'start',
        toDateKey: 'end',
      };
      component.value = {
        start: new Date(2025, 5, 1),
        end: new Date(2025, 5, 30),
      };
      component.ngOnInit();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent).toContain('Jun 1, 2025');
      expect(span.nativeElement.textContent).toContain('Jun 30, 2025');
    });

    it('should render custom valueTemplate', () => {
      component.value = {
        fromDate: new Date(2025, 0, 1),
      };
      component.valueTemplate = templateHost.customValTpl;
      component.ngOnInit();
      fixture.detectChanges();

      const customEl = fixture.debugElement.query(By.css('.custom-val'));
      expect(customEl).toBeTruthy();
    });
  });

  describe('ReadonlyFileinfoComponent', () => {
    let fixture: ComponentFixture<ReadonlyFileinfoComponent>;
    let component: ReadonlyFileinfoComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(ReadonlyFileinfoComponent);
      component = fixture.componentInstance;
    });

    it('should throw error in ngOnInit when fileInfoOptions is empty', () => {
      component.value = 'doc';
      expect(() => component.ngOnInit()).toThrowError(/No option list provided/);
    });

    it('should display label and value when option matches in ngOnChanges', () => {
      component.fileInfoOptions = [
        { label: 'Document A', value: 'doc-a.pdf' },
        { label: 'Document B', value: 'doc-b.pdf' },
      ];
      component.value = 'doc-b.pdf';
      component.ngOnInit();
      component.ngOnChanges();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('Document B - doc-b.pdf');
    });

    it('should display mdash when option is not found in ngOnChanges', () => {
      component.fileInfoOptions = [{ label: 'Document A', value: 'doc-a.pdf' }];
      component.value = 'unknown.pdf';
      component.ngOnInit();
      component.ngOnChanges();
      fixture.detectChanges();

      const span = fixture.debugElement.query(By.css('.text-bold'));
      expect(span.nativeElement.textContent.trim()).toBe('&mdash;');
    });

    it('should return early from ngOnChanges if fileInfoOptions is not defined', () => {
      component.ngOnChanges();
      expect(component.displayValue).toBeUndefined();
    });

    it('should render custom valueTemplate', () => {
      component.fileInfoOptions = [{ label: 'Doc', value: '1' }];
      component.value = '1';
      component.valueTemplate = templateHost.customValTpl;
      component.ngOnInit();
      component.ngOnChanges();
      fixture.detectChanges();

      const customEl = fixture.debugElement.query(By.css('.custom-val'));
      expect(customEl.nativeElement.textContent).toBe('Custom: Doc - 1');
    });
  });
});
