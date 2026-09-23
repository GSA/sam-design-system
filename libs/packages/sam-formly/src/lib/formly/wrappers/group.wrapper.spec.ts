import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UsaAccordionModule } from '@gsa-sam/ngx-uswds';
import { FieldType, FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { FormlyGroupWrapperComponent } from './group.wrapper';

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

describe('FormlyGroupWrapperComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, DummyInputComponent, FormlyGroupWrapperComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        UsaAccordionModule,
        FormlyModule.forRoot({
          types: [{ name: 'input', component: DummyInputComponent }],
          wrappers: [{ name: 'group', component: FormlyGroupWrapperComponent }],
        }),
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  describe('readonlyMode', () => {
    it('should render default template directly without accordion or panel when readonlyMode is true', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['group'],
          props: {
            readonlyMode: true,
            group: 'panel',
            label: 'Test Group',
          },
        },
      ];

      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.sds-panel'))).toBeNull();
      expect(fixture.debugElement.query(By.css('usa-accordion'))).toBeNull();
      expect(fixture.debugElement.query(By.css('.dummy-inner-input'))).toBeTruthy();
    });
  });

  describe('accordion group', () => {
    it('should render accordion with header, labelClass, projected content, and set default className', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['group'],
          props: {
            group: 'accordion',
            label: 'Accordion Group Label',
            labelClass: 'custom-accordion-label',
            expand: true,
          },
        },
      ];

      fixture.detectChanges();

      const accordionEl = fixture.debugElement.query(By.css('usa-accordion'));
      expect(accordionEl).toBeTruthy();

      const labelEl = fixture.debugElement.query(By.css('.custom-accordion-label'));
      expect(labelEl).toBeTruthy();
      expect(labelEl.nativeElement.textContent.trim()).toBe('Accordion Group Label');

      const innerInput = fixture.debugElement.query(By.css('.dummy-inner-input'));
      expect(innerInput).toBeTruthy();

      expect(host.fields[0].className).toBe('margin-top-0');
    });

    it('should preserve custom className when group is accordion', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          className: 'custom-class',
          wrappers: ['group'],
          props: {
            group: 'accordion',
            label: 'Accordion Label',
          },
        },
      ];

      fixture.detectChanges();
      expect(host.fields[0].className).toBe('custom-class');
    });

    it('should collapse accordion on resetAll when item is expanded and model has no value', () => {
      const fieldChanges$ = new Subject<any>();
      host.options = { fieldChanges: fieldChanges$ };
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['group'],
          props: {
            group: 'accordion',
            label: 'Accordion Label',
            expand: false,
          },
        },
      ];

      fixture.detectChanges();

      const wrapperDebug = fixture.debugElement.query(By.directive(FormlyGroupWrapperComponent));
      const component = wrapperDebug.componentInstance as FormlyGroupWrapperComponent;

      const collapseSpy = vi.spyOn(component.accordion, 'collapse');
      component.accordionItem.expanded = true;

      fieldChanges$.next({ field: host.fields[0], type: 'resetAll' });

      expect(collapseSpy).toHaveBeenCalledWith(component.accordionItem.id);
    });

    it('should not collapse on resetAll when model has value', () => {
      const fieldChanges$ = new Subject<any>();
      host.options = { fieldChanges: fieldChanges$ };
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['group'],
          props: {
            group: 'accordion',
            label: 'Accordion Label',
            expand: true,
          },
        },
      ];

      fixture.detectChanges();

      const wrapperDebug = fixture.debugElement.query(By.directive(FormlyGroupWrapperComponent));
      const component = wrapperDebug.componentInstance as FormlyGroupWrapperComponent;

      const collapseSpy = vi.spyOn(component.accordion, 'collapse');
      component.accordionItem.expanded = true;

      fieldChanges$.next({ field: host.fields[0], type: 'resetAll' });

      expect(collapseSpy).not.toHaveBeenCalled();
    });
  });

  describe('panel group', () => {
    it('should render panel, header, labelClass, and project content', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['group'],
          props: {
            group: 'panel',
            label: 'Panel Label',
            labelClass: 'panel-label-class',
          },
        },
      ];

      fixture.detectChanges();

      const panelEl = fixture.debugElement.query(By.css('.sds-panel'));
      expect(panelEl).toBeTruthy();
      expect(panelEl.nativeElement.classList.contains('sds-panel--multiple')).toBe(false);

      const headerEl = fixture.debugElement.query(By.css('.sds-panel__header'));
      expect(headerEl).toBeTruthy();
      expect(headerEl.nativeElement.textContent.trim()).toBe('Panel Label');
      expect(headerEl.attributes['aria-hidden']).toBeUndefined();

      const bodyEl = fixture.debugElement.query(By.css('.sds-panel__body .dummy-inner-input'));
      expect(bodyEl).toBeTruthy();

      expect(host.fields[0].className).toBe('margin-top-0');
    });

    it('should add sds-panel--multiple class when fieldGroup has length', () => {
      host.fields = [
        {
          wrappers: ['group'],
          props: {
            group: 'panel',
            label: 'Multiple Panel',
          },
          fieldGroup: [
            {
              key: 'child1',
              type: 'input',
            },
            {
              key: 'child2',
              type: 'input',
            },
          ],
        },
      ];

      fixture.detectChanges();

      const panelEl = fixture.debugElement.query(By.css('.sds-panel--multiple'));
      expect(panelEl).toBeTruthy();
    });

    it('should set aria-hidden to true when announceLabel is true', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['group'],
          props: {
            group: 'panel',
            label: 'Panel Label',
            announceLabel: true,
          },
        },
      ];

      fixture.detectChanges();

      const headerEl = fixture.debugElement.query(By.css('.sds-panel__header'));
      expect(headerEl.attributes['aria-hidden']).toBe('true');
    });

    it('should hide header when hideLabel is true', () => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['group'],
          props: {
            group: 'panel',
            label: 'Panel Label',
            hideLabel: true,
          },
        },
      ];

      fixture.detectChanges();

      const headerEl = fixture.debugElement.query(By.css('.sds-panel__header'));
      expect(headerEl).toBeNull();
    });
  });

  describe('default group', () => {
    it('should render content directly and set className when fieldGroup is present', () => {
      host.fields = [
        {
          wrappers: ['group'],
          fieldGroup: [
            {
              key: 'child',
              type: 'input',
            },
          ],
        },
      ];

      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.sds-panel'))).toBeNull();
      expect(fixture.debugElement.query(By.css('usa-accordion'))).toBeNull();
      expect(fixture.debugElement.query(By.css('.dummy-inner-input'))).toBeTruthy();
      expect(host.fields[0].className).toBe('margin-top-0');
    });
  });

  describe('modelHasValue', () => {
    let component: FormlyGroupWrapperComponent;

    beforeEach(() => {
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['group'],
          props: {
            label: 'Group',
          },
        },
      ];
      fixture.detectChanges();
      const wrapperDebug = fixture.debugElement.query(By.directive(FormlyGroupWrapperComponent));
      component = wrapperDebug.componentInstance;
    });

    it('should check props.expand, object value, and dirty state', () => {
      component.props.expand = true;
      expect(component.modelHasValue()).toBe(true);

      component.props.expand = false;
      expect(component.modelHasValue()).toBe(false);

      delete component.props.expand;
      component.formControl.setValue({ a: '1' });
      expect(component.modelHasValue()).toBeTruthy();

      component.formControl.setValue({});
      expect(component.modelHasValue()).toBe(false);

      component.formControl.setValue('');
      component.formControl.markAsPristine();
      expect(component.modelHasValue()).toBe(false);

      component.formControl.markAsDirty();
      expect(component.modelHasValue()).toBe(true);
    });
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe on destroy', () => {
      const fieldChanges$ = new Subject<any>();
      host.options = { fieldChanges: fieldChanges$ };
      host.fields = [
        {
          key: 'testKey',
          type: 'input',
          wrappers: ['group'],
          props: {
            group: 'accordion',
            label: 'Accordion',
          },
        },
      ];

      fixture.detectChanges();

      const wrapperDebug = fixture.debugElement.query(By.directive(FormlyGroupWrapperComponent));
      const component = wrapperDebug.componentInstance as FormlyGroupWrapperComponent;

      expect(component.resetAllSubscription).toBeDefined();
      const unsubSpy = vi.spyOn(component.resetAllSubscription, 'unsubscribe');

      fixture.destroy();

      expect(unsubSpy).toHaveBeenCalled();
    });
  });
});
