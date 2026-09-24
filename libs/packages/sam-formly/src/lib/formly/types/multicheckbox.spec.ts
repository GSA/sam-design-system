import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Component, ViewChild, DebugElement } from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFieldMultiCheckboxComponent } from './multicheckbox';
import { FormlyValidationWrapperComponent } from '../wrappers/validation.wrapper';
import { SdsCollapseModule } from '@gsa-sam/components';
import { IconModule, IconComponent } from '@gsa-sam/ngx-uswds-icons';

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new (...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testComponentInputs: any;

describe('Formly Field multicheckbox Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldMultiCheckboxComponent, FormlyValidationWrapperComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormlySelectModule,
        SdsCollapseModule,
        IconModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'multicheckbox',
              component: FormlyFieldMultiCheckboxComponent,
              wrappers: ['validation'],
            },
          ],
          wrappers: [
            {
              name: 'validation',
              component: FormlyValidationWrapperComponent,
            },
          ],
        }),
      ],
    });

    TestBed.overrideComponent(IconComponent, {
      set: { template: '<span></span>' },
    });
  });

  describe('options and change events', () => {
    beforeEach(() => {
      testComponentInputs = {
        form: new UntypedFormGroup({}),
        options: {},
        model: {},
      };
    });

    it('should bind to a static array of data', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          props: {
            label: 'Formly multi Select checkbox',
            options: [
              { key: 'sports', value: 'Sports' },
              { key: 'movies', value: 'Movies' },
              { key: 'others', value: 'Others' },
            ],
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();
      const comp = fixture.debugElement.query(By.directive(FormlyFieldMultiCheckboxComponent)).componentInstance;
      expect(comp.field.props.options.length).toBe(3);
    });

    it('should handle array type changes on user click', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          props: {
            label: 'Formly multi Select checkbox',
            type: 'array',
            options: [
              { key: 'sports', value: 'Sports' },
              { key: 'movies', value: 'Movies' },
              { key: 'others', value: 'Others' },
            ],
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const checkboxes = fixture.debugElement.queryAll(By.css('.usa-checkbox__input'));
      const sportsCheckbox = checkboxes[0].nativeElement as HTMLInputElement;

      // Select 'Sports'
      sportsCheckbox.click();
      fixture.detectChanges();
      expect(testComponentInputs.form.get('multi-checkbox').value).toEqual(['Sports']);
      expect(testComponentInputs.form.get('multi-checkbox').touched).toBe(true);

      // Unselect 'Sports'
      sportsCheckbox.click();
      fixture.detectChanges();
      expect(testComponentInputs.form.get('multi-checkbox').value).toEqual([]);
    });

    it('should handle object type changes when type is not array', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          props: {
            label: 'Formly multi Select checkbox',
            options: [
              { key: 'sports', value: 'Sports' },
              { key: 'movies', value: 'Movies' },
            ],
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const checkboxes = fixture.debugElement.queryAll(By.css('.usa-checkbox__input'));
      const sportsCheckbox = checkboxes[0].nativeElement as HTMLInputElement;

      sportsCheckbox.click();
      fixture.detectChanges();
      expect(testComponentInputs.form.get('multi-checkbox').value).toEqual({ Sports: true });

      sportsCheckbox.click();
      fixture.detectChanges();
      expect(testComponentInputs.form.get('multi-checkbox').value).toEqual({ Sports: false });
    });

    it('should select all and deselect all when selectAllOption is clicked', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          id: 'test_multi_0',
          props: {
            label: 'Formly multi Select checkbox',
            type: 'array',
            selectAllOption: true,
            options: [
              { key: 'sports', value: 'Sports' },
              { key: 'movies', value: 'Movies' },
              { key: 'others', value: 'Others' },
            ],
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const checkboxes = fixture.debugElement.queryAll(By.css('.usa-checkbox__input'));
      const selectAllInput = checkboxes[0].nativeElement as HTMLInputElement;

      selectAllInput.click();
      fixture.detectChanges();

      expect(checkboxes[1].nativeElement.checked).toBe(true);
      expect(checkboxes[2].nativeElement.checked).toBe(true);
      expect(checkboxes[3].nativeElement.checked).toBe(true);
      expect(testComponentInputs.form.get('multi-checkbox').value).toEqual(['Sports', 'Movies', 'Others']);

      selectAllInput.click();
      fixture.detectChanges();

      expect(checkboxes[1].nativeElement.checked).toBe(false);
      expect(checkboxes[2].nativeElement.checked).toBe(false);
      expect(checkboxes[3].nativeElement.checked).toBe(false);
    });

    it('should set aria-checked to mixed on select all when some options are selected', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          id: 'test_multi_0',
          props: {
            label: 'Formly multi Select checkbox',
            type: 'array',
            selectAllOption: true,
            options: [
              { key: 'sports', value: 'Sports' },
              { key: 'movies', value: 'Movies' },
              { key: 'others', value: 'Others' },
            ],
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const checkboxes = fixture.debugElement.queryAll(By.css('.usa-checkbox__input'));
      // Select only 'Sports'
      checkboxes[1].nativeElement.click();
      fixture.detectChanges();

      expect(checkboxes[0].nativeElement.getAttribute('aria-checked')).toBe('mixed');
    });

    it('should toggle expandable options when expand button is clicked', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          id: 'test_multi_0',
          props: {
            label: 'Expandable checkbox',
            selectAllOption: true,
            expandableOptions: true,
            expandedOptions: false,
            options: [{ key: 'sports', value: 'Sports' }],
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const expandBtn = fixture.nativeElement.querySelector('button.sds-button');
      expect(expandBtn).toBeTruthy();

      expandBtn.click();
      fixture.detectChanges();
      expect(testComponentInputs.fields[0].props.expandedOptions).toBe(true);

      expandBtn.click();
      fixture.detectChanges();
      expect(testComponentInputs.fields[0].props.expandedOptions).toBe(false);
    });

    it('should handle sub-options selection and update main and sub option aria-checked', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          id: 'test_multi_0',
          props: {
            label: 'Hierarchical checkbox',
            type: 'array',
            options: [
              {
                value: 'Parent1',
                label: 'Parent 1',
                props: {
                  options: [
                    { value: 'Child1', label: 'Child 1' },
                    { value: 'Child2', label: 'Child 2' },
                  ],
                },
              },
            ],
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const comp = fixture.debugElement.query(By.directive(FormlyFieldMultiCheckboxComponent))
        .componentInstance as FormlyFieldMultiCheckboxComponent;
      const checkboxes = fixture.debugElement.queryAll(By.css('.usa-checkbox__input'));

      // Click Parent1: should select parent and all sub-options
      checkboxes[0].nativeElement.click();
      fixture.detectChanges();
      expect(testComponentInputs.form.get('multi-checkbox').value).toContain('Parent1');
      expect(testComponentInputs.form.get('multi-checkbox').value).toContain('Child1');
      expect(testComponentInputs.form.get('multi-checkbox').value).toContain('Child2');

      // Uncheck Child1 via onSubOptionChange
      comp.onSubOptionChange(
        { value: 'Child1' },
        false,
        testComponentInputs.fields[0].props.options[0].props.options,
        0,
      );
      fixture.detectChanges();
      expect(comp.subOptionAriaChecked[0]).toBe('mixed');

      // Uncheck Child2 as well: all sub-options false
      comp.onSubOptionChange(
        { value: 'Child2' },
        false,
        testComponentInputs.fields[0].props.options[0].props.options,
        0,
      );
      fixture.detectChanges();
      expect(comp.subOptionAriaChecked[0]).toBe('false');

      // Check all sub-options: all true
      comp.onSubOptionChange(
        { value: 'Child1' },
        true,
        testComponentInputs.fields[0].props.options[0].props.options,
        0,
      );
      comp.onSubOptionChange(
        { value: 'Child2' },
        true,
        testComponentInputs.fields[0].props.options[0].props.options,
        0,
      );
      fixture.detectChanges();
      expect(comp.subOptionAriaChecked[0]).toBe('true');
    });

    it('should handle groupOptions configuration', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          props: {
            label: 'Grouped Checkbox',
            groupOptions: {
              CategoryA: [
                { value: 'itemA1', label: 'Item A1' },
                { value: 'itemA2', label: 'Item A2' },
              ],
              CategoryB: [{ value: 'itemB1', label: 'Item B1' }],
            },
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const comp = fixture.debugElement.query(By.directive(FormlyFieldMultiCheckboxComponent))
        .componentInstance as FormlyFieldMultiCheckboxComponent;
      expect(fixture.nativeElement.querySelectorAll('legend').length).toBeGreaterThan(1);

      // Check an option in CategoryA
      comp.onChange('itemA1', true);
      fixture.detectChanges();

      expect(testComponentInputs.form.get('multi-checkbox').value).toEqual({ itemA1: true });
      expect(comp.isChecked({ value: 'itemA1' })).toBeTruthy();
      expect(comp.isChecked({ value: 'itemA2' })).toBeFalsy();
    });

    it('should bind disabled state for options and entire form control', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          props: {
            label: 'Disabled Test',
            options: [
              { key: 'enabledOpt', value: 'Enabled Opt' },
              { key: 'disabledOpt', value: 'Disabled Opt', disabled: true },
            ],
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const checkboxes = fixture.debugElement.queryAll(By.css('.usa-checkbox__input'));
      expect(checkboxes[0].nativeElement.disabled).toBe(false);
      expect(checkboxes[1].nativeElement.disabled).toBe(true);

      testComponentInputs.form.get('multi-checkbox').disable();
      fixture.detectChanges();
      expect(testComponentInputs.form.get('multi-checkbox').disabled).toBe(true);
      expect(checkboxes[0].nativeElement.disabled).toBe(true);
      expect(checkboxes[1].nativeElement.disabled).toBe(true);

      testComponentInputs.form.get('multi-checkbox').enable();
      fixture.detectChanges();
      expect(testComponentInputs.form.get('multi-checkbox').disabled).toBe(false);
      expect(checkboxes[0].nativeElement.disabled).toBe(false);
      expect(checkboxes[1].nativeElement.disabled).toBe(true);
    });

    it('should render error state when invalid and touched, and clear error when resolved', () => {
      testComponentInputs.model = { 'multi-checkbox': null };
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          validators: {
            validation: [Validators.required],
          },
          props: {
            label: 'Required Multicheckbox',
            type: 'array',
            options: [{ key: 'sports', value: 'Sports' }],
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const control = testComponentInputs.form.get('multi-checkbox');
      expect(control.invalid).toBe(true);
      expect(fixture.nativeElement.querySelector('.usa-error-message')).toBeNull();

      control.markAsTouched();
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.usa-error-message')).not.toBeNull();

      control.setValue(['Sports']);
      fixture.detectChanges();

      expect(control.valid).toBe(true);
      expect(fixture.nativeElement.querySelector('.usa-error-message')).toBeNull();
    });

    it('should verify direct edge cases in checkSubOption, checkMainOption, and _getAriaChecked', () => {
      testComponentInputs.fields = [
        {
          key: 'multi-checkbox',
          type: 'multicheckbox',
          id: 'test_multi_0',
          props: {
            label: 'Edge Case Test',
            options: [{ value: 'opt1' }, { value: 'opt2' }],
          },
        },
      ];

      const fixture = createTestComponent(
        '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
      );
      fixture.detectChanges();

      const comp = fixture.debugElement.query(By.directive(FormlyFieldMultiCheckboxComponent))
        .componentInstance as FormlyFieldMultiCheckboxComponent;

      // isChecked with null formControl value
      testComponentInputs.form.get('multi-checkbox').setValue(null);
      expect(comp.isChecked({ value: 'opt1' })).toBe(false);

      // checkSubOption with null formControl value
      expect(comp.checkSubOption([{ value: 'opt1' }], 0)).toBeUndefined();

      // checkSubOption with all selected
      testComponentInputs.form.get('multi-checkbox').setValue(['opt1', 'opt2']);
      expect(comp.checkSubOption([{ value: 'opt1' }, { value: 'opt2' }], 0)).toBe(true);
      expect(comp.subOptionAriaChecked[0]).toBe('true');

      // checkSubOption with some selected
      expect(comp.checkSubOption([{ value: 'opt1' }, { value: 'opt3' }], 0)).toBe(true);
      expect(comp.subOptionAriaChecked[0]).toBe('mixed');

      // checkSubOption with none selected
      expect(comp.checkSubOption([{ value: 'opt8' }, { value: 'opt9' }], 0)).toBe(false);
      expect(comp.subOptionAriaChecked[0]).toBe('false');

      // checkMainOption with object value
      testComponentInputs.form.get('multi-checkbox').setValue({ opt1: true, opt2: false });
      expect(comp.checkMainOption('test_multi_0', [{ value: 'opt1' }, { value: 'opt2' }])).toBe(true);
      expect(comp.mainOptionAriaChecked[0]).toBe('mixed');

      // _getAriaChecked
      comp._getAriaChecked(0);
      expect(comp.mainOptionAriaChecked[0]).toBe('false');

      comp._getAriaChecked(1);
      expect(comp.mainOptionAriaChecked[0]).toBe('mixed');

      comp._getAriaChecked(2);
      expect(comp.mainOptionAriaChecked[0]).toBe('true');
    });
  });
});

@Component({
  selector: 'formly-form-multicheckbox',
  template: '',
  standalone: false,
})
class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

  get fields() {
    return testComponentInputs.fields;
  }
  get form() {
    return testComponentInputs.form;
  }
  get model() {
    return testComponentInputs.model || {};
  }
  get options() {
    return testComponentInputs.options;
  }
}
