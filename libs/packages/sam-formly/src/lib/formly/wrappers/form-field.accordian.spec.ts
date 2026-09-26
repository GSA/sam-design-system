import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UsaAccordionModule } from '@gsa-sam/ngx-uswds';
import { FieldType, FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { FormlyAccordianFormFieldComponent } from './form-field.accordian';

@Component({
  selector: 'sam-dummy-input',
  template: '<input class="dummy-inner-input" [formControl]="formControl" [id]="id" />',
  standalone: false,
})
class DummyInputComponent extends FieldType {}

@Component({
  template: '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>',
  standalone: false,
})
class TestHostComponent {
  form = new UntypedFormGroup({});
  fields: FormlyFieldConfig[] = [];
  model: any = {};
  options: FormlyFormOptions = {};
}

describe('FormlyAccordianFormFieldComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, DummyInputComponent, FormlyAccordianFormFieldComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        UsaAccordionModule,
        FormlyModule.forRoot({
          types: [{ name: 'input', component: DummyInputComponent }],
          wrappers: [{ name: 'accordionwrapper', component: FormlyAccordianFormFieldComponent }],
        }),
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  it('should project inner component and render label with labelClass', () => {
    host.fields = [
      {
        key: 'testKey',
        type: 'input',
        wrappers: ['accordionwrapper'],
        props: {
          label: 'Accordion Label Test',
          labelClass: 'custom-label-class',
          expand: true,
        },
      },
    ];

    fixture.detectChanges();

    const wrapperEl = fixture.debugElement.query(By.directive(FormlyAccordianFormFieldComponent));
    expect(wrapperEl).toBeTruthy();

    const labelEl = fixture.debugElement.query(By.css('.custom-label-class'));
    expect(labelEl).toBeTruthy();
    expect(labelEl.nativeElement.textContent.trim()).toBe('Accordion Label Test');

    const innerInput = fixture.debugElement.query(By.css('.dummy-inner-input'));
    expect(innerInput).toBeTruthy();
  });

  describe('modelHasValue', () => {
    let component: FormlyAccordianFormFieldComponent;

    beforeEach(() => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['accordionwrapper'],
          props: {
            label: 'Test',
          },
        },
      ];
      fixture.detectChanges();
      const wrapperDebug = fixture.debugElement.query(By.directive(FormlyAccordianFormFieldComponent));
      component = wrapperDebug.componentInstance;
    });

    it('should respect props.expand when defined', () => {
      component.props.expand = true;
      expect(component.modelHasValue()).toBe(true);

      component.props.expand = false;
      expect(component.modelHasValue()).toBe(false);
    });

    it('should evaluate object values using qs.stringify when props.expand is undefined', () => {
      delete component.props.expand;

      component.formControl.setValue({ key1: 'value1' });
      expect(component.modelHasValue()).toBeTruthy();

      component.formControl.setValue({});
      expect(component.modelHasValue()).toBe(false);
    });

    it('should evaluate primitive values and dirty state', () => {
      delete component.props.expand;

      component.formControl.setValue('some value');
      expect(component.modelHasValue()).toBeTruthy();

      component.formControl.setValue('');
      component.formControl.markAsPristine();
      expect(component.modelHasValue()).toBe(false);

      component.formControl.markAsDirty();
      expect(component.modelHasValue()).toBe(true);
    });
  });

  describe('ngAfterViewInit resetAll behavior', () => {
    let fieldChanges$: Subject<any>;

    beforeEach(() => {
      fieldChanges$ = new Subject();
      host.options = {
        fieldChanges: fieldChanges$,
      };
    });

    it('should collapse accordion on resetAll when expanded and model has no value', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['accordionwrapper'],
          props: {
            label: 'Accordion Group',
            group: 'accordion',
            expand: false,
          },
        },
      ];

      fixture.detectChanges();

      const wrapperDebug = fixture.debugElement.query(By.directive(FormlyAccordianFormFieldComponent));
      const component = wrapperDebug.componentInstance as FormlyAccordianFormFieldComponent;

      const collapseSpy = vi.spyOn(component.accordion, 'collapse');
      component.accordionItem.expanded = true;

      fieldChanges$.next({ field: host.fields[0], type: 'resetAll' });

      expect(collapseSpy).toHaveBeenCalledWith(component.accordionItem.id);
    });

    it('should not collapse if model has value', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['accordionwrapper'],
          props: {
            label: 'Accordion Group',
            group: 'accordion',
            expand: true,
          },
        },
      ];

      fixture.detectChanges();

      const wrapperDebug = fixture.debugElement.query(By.directive(FormlyAccordianFormFieldComponent));
      const component = wrapperDebug.componentInstance as FormlyAccordianFormFieldComponent;

      const collapseSpy = vi.spyOn(component.accordion, 'collapse');
      component.accordionItem.expanded = true;

      fieldChanges$.next({ field: host.fields[0], type: 'resetAll' });

      expect(collapseSpy).not.toHaveBeenCalled();
    });

    it('should not collapse on other fieldChanges types', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['accordionwrapper'],
          props: {
            label: 'Accordion Group',
            group: 'accordion',
            expand: false,
          },
        },
      ];

      fixture.detectChanges();

      const wrapperDebug = fixture.debugElement.query(By.directive(FormlyAccordianFormFieldComponent));
      const component = wrapperDebug.componentInstance as FormlyAccordianFormFieldComponent;

      const collapseSpy = vi.spyOn(component.accordion, 'collapse');
      component.accordionItem.expanded = true;

      fieldChanges$.next({ field: host.fields[0], type: 'otherChange' });

      expect(collapseSpy).not.toHaveBeenCalled();
    });

    it('should not subscribe when props.group != accordion', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['accordionwrapper'],
          props: {
            label: 'Accordion Group',
            group: 'other',
          },
        },
      ];

      fixture.detectChanges();

      const wrapperDebug = fixture.debugElement.query(By.directive(FormlyAccordianFormFieldComponent));
      const component = wrapperDebug.componentInstance as FormlyAccordianFormFieldComponent;

      expect(component.resetAllSubscription).toBeUndefined();
    });

    it('should unsubscribe on destroy', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['accordionwrapper'],
          props: {
            label: 'Accordion Group',
            group: 'accordion',
            expand: false,
          },
        },
      ];

      fixture.detectChanges();

      const wrapperDebug = fixture.debugElement.query(By.directive(FormlyAccordianFormFieldComponent));
      const component = wrapperDebug.componentInstance as FormlyAccordianFormFieldComponent;

      expect(component.resetAllSubscription).toBeDefined();
      const unsubSpy = vi.spyOn(component.resetAllSubscription, 'unsubscribe');

      fixture.destroy();

      expect(unsubSpy).toHaveBeenCalled();
    });
  });
});
