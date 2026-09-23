import { FormlyFieldInputComponent } from '../formly/types/input';
import { Component as StubComponent, Input } from '@angular/core';

@StubComponent({
  selector: 'usa-icon',
  template: '',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: any;
}
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '../formly/formly.module';
import { SdsFormlyResetComponent } from './formly-reset.component';
import { SdsFormlyResetModule } from './formly-reset.module';

describe('SDS Formly Reset', () => {
  let testComp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdsFormlyResetComponent, TestComponent, UsaIconStubComponent],
      imports: [NoopAnimationsModule, SdsFormlyModule, ReactiveFormsModule, FormlyModule.forRoot({})],
    }).compileComponents();

    TestBed.overrideComponent(FormlyFieldInputComponent, {
      set: {
        template: '<input [id]=id [formControl]=formControl />',
      },
    });
    fixture = TestBed.createComponent(TestComponent);
    testComp = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should reset form values to null if no values were set in model when clicked', () => {
    testComp.form.controls.flat.setValue('edit flat input');
    testComp.form.get('nested.nestedInput').setValue('edit nested input');

    expect(testComp.model).toEqual({
      flat: 'edit flat input',
      nested: { nestedInput: 'edit nested input' },
    });

    const resetEl = fixture.nativeElement.querySelector('.usa-button');
    resetEl.click();
    fixture.detectChanges();

    expect(testComp.model).toEqual({ flat: undefined, nested: { nestedInput: undefined } });
  });

  it('should reset fields with defaultValue provided to that defaultValue when clicked', () => {
    const fields = [
      {
        key: 'flat',
        type: 'input',
        defaultValue: 'flat defaultValue',
      },
      {
        key: 'nested',
        fieldGroup: [
          {
            key: 'nestedInput',
            type: 'input',
            defaultValue: 'nested defaultValue',
          },
        ],
      },
    ];

    testComp.fields = fields;
    fixture.detectChanges();

    expect(testComp.model).toEqual({
      flat: 'flat defaultValue',
      nested: { nestedInput: 'nested defaultValue' },
    });

    const resetEl = fixture.nativeElement.querySelector('.usa-button');
    resetEl.click();
    fixture.detectChanges();

    expect(testComp.model).toEqual({
      flat: 'flat defaultValue',
      nested: { nestedInput: 'nested defaultValue' },
    });
  });

  it('should clone both flat and nested values from initial model during resetModel if values were set when clicked', () => {
    const model = {
      flat: 'flat value set',
      nested: { nestedInput: 'nested value set' },
    };

    testComp.model = model;

    fixture.detectChanges();

    testComp.form.get('flat').setValue('edit flat input');
    testComp.form.get('nested.nestedInput').setValue('edit nested input');

    expect(testComp.model).toEqual({
      flat: 'edit flat input',
      nested: { nestedInput: 'edit nested input' },
    });

    const resetEl = fixture.nativeElement.querySelector('.usa-button');
    resetEl.click();
    fixture.detectChanges();

    expect(testComp.model).toEqual({
      flat: 'flat value set',
      nested: { nestedInput: 'nested value set' },
    });
  });

  it('should reset form values to defaultModel when defaultModel input is provided', () => {
    testComp.defaultModel = {
      flat: 'default flat value',
      nested: { nestedInput: 'default nested value' },
    };
    fixture.detectChanges();

    testComp.form.get('flat').setValue('changed flat input');
    testComp.form.get('nested.nestedInput').setValue('changed nested input');

    expect(testComp.model).toEqual({
      flat: 'changed flat input',
      nested: { nestedInput: 'changed nested input' },
    });

    const resetEl = fixture.nativeElement.querySelector('.usa-button');
    resetEl.click();
    fixture.detectChanges();

    expect(testComp.model).toEqual({
      flat: 'default flat value',
      nested: { nestedInput: 'default nested value' },
    });
  });

  it('should emit resetClicked event when reset button is clicked', () => {
    const resetEl = fixture.nativeElement.querySelector('.usa-button');
    resetEl.click();
    fixture.detectChanges();

    expect(testComp.onResetClicked).toHaveBeenCalledTimes(1);
  });

  it('should apply custom classes to reset button when classes input is provided', () => {
    testComp.classes = ['my-custom-class', 'usa-button--big'];
    fixture.detectChanges();

    const resetEl = fixture.nativeElement.querySelector('button');
    expect(resetEl.classList.contains('my-custom-class')).toBe(true);
    expect(resetEl.classList.contains('usa-button--big')).toBe(true);
  });

  it('should restore form control pristine and untouched state after reset', () => {
    const flatControl = testComp.form.get('flat');
    flatControl.setValue('modified value');
    flatControl.markAsDirty();
    flatControl.markAsTouched();

    expect(flatControl.dirty).toBe(true);
    expect(flatControl.touched).toBe(true);

    const resetEl = fixture.nativeElement.querySelector('.usa-button');
    resetEl.click();
    fixture.detectChanges();

    expect(flatControl.pristine).toBe(true);
    expect(flatControl.untouched).toBe(true);
  });

  describe('SdsFormlyResetComponent isolated unit tests', () => {
    it('should call options.resetModel with defaultModel when defaultModel is provided', () => {
      const comp = new SdsFormlyResetComponent();
      const resetSpy = vi.fn();
      comp.options = { resetModel: resetSpy } as any;
      comp.defaultModel = { name: 'test' };
      const emitSpy = vi.spyOn(comp.resetClicked, 'emit');

      comp.resetAll();

      expect(resetSpy).toHaveBeenCalledWith({ name: 'test' });
      expect(emitSpy).toHaveBeenCalledTimes(1);
    });

    it('should call options.resetModel without args when defaultModel is not provided', () => {
      const comp = new SdsFormlyResetComponent();
      const resetSpy = vi.fn();
      comp.options = { resetModel: resetSpy } as any;
      comp.defaultModel = null;
      const emitSpy = vi.spyOn(comp.resetClicked, 'emit');

      comp.resetAll();

      expect(resetSpy).toHaveBeenCalledWith();
      expect(emitSpy).toHaveBeenCalledTimes(1);
    });

    it('should initialize SdsFormlyResetModule', () => {
      const module = new SdsFormlyResetModule();
      expect(module).toBeTruthy();
    });
  });
});

@Component({
  template: ` <form [formGroup]="form">
    <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>
    <sds-formly-reset
      [options]="options"
      [defaultModel]="defaultModel"
      [classes]="classes"
      (resetClicked)="onResetClicked()"
    ></sds-formly-reset>
  </form>`,
  standalone: false,
})
class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;
  form = new UntypedFormGroup({});
  options = {};
  defaultModel: any;
  classes: string[] = ['usa-button', 'usa-button--unstyled'];
  fields = [
    {
      key: 'flat',
      type: 'input',
    },
    {
      key: 'nested',
      fieldGroup: [
        {
          key: 'nestedInput',
          type: 'input',
        },
      ],
    },
  ];
  model = {};
  onResetClicked = vi.fn();
}
