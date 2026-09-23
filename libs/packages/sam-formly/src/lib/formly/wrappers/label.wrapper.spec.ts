import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsTooltipModule } from '@gsa-sam/components';
import { FieldType, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyLabelWrapperComponent } from './label.wrapper';

@Component({
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
  @Input() position?: string;
  @Input() sdsTooltip?: any;
}

@Component({
  selector: 'sam-dummy-input',
  template: '<input class="dummy-inner-input" [formControl]="formControl" [id]="id" />',
  standalone: false,
})
class DummyInputComponent extends FieldType {}

@Component({
  selector: 'sam-dummy-group',
  template: '<formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>',
  standalone: false,
})
class DummyGroupComponent extends FieldType {}

@Component({
  template: `
    <ng-template #customLabelTpl>
      <span class="custom-template-label">Custom Template Content</span>
    </ng-template>
    <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
  `,
  standalone: false,
})
class TestHostComponent {
  @ViewChild('customLabelTpl', { static: true }) customLabelTpl: TemplateRef<any>;
  form = new UntypedFormGroup({});
  fields: FormlyFieldConfig[] = [];
  model: any = {};
}

describe('FormlyLabelWrapperComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        DummyInputComponent,
        DummyGroupComponent,
        UsaIconStubComponent,
        FormlyLabelWrapperComponent,
      ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        SdsTooltipModule,
        FormlyModule.forRoot({
          types: [
            { name: 'input', component: DummyInputComponent },
            { name: 'checkbox', component: DummyInputComponent },
            { name: 'multicheckbox', component: DummyInputComponent },
            { name: 'custom-container', component: DummyGroupComponent },
          ],
          wrappers: [{ name: 'label', component: FormlyLabelWrapperComponent }],
        }),
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  it('should project inner component into fieldComponent', () => {
    host.fields = [
      {
        key: 'testInput',
        type: 'input',
        wrappers: ['label'],
        props: {
          label: 'My Input',
        },
      },
    ];

    fixture.detectChanges();

    const innerInput = fixture.debugElement.query(By.css('.dummy-inner-input'));
    expect(innerInput).toBeTruthy();
  });

  describe('hasLabel logic', () => {
    it('should show label when props.label is set on non-checkbox type', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: { label: 'Visible Label' },
        },
      ];
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl).toBeTruthy();
      expect(labelEl.nativeElement.textContent).toContain('Visible Label');
    });

    it('should not show label when props.hideLabel is true', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: { label: 'Hidden Label', hideLabel: true },
        },
      ];
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl).toBeNull();
    });

    it('should not show label when props.label is absent', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: {},
        },
      ];
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl).toBeNull();
    });

    it('should not show label for checkbox type even if label is present', () => {
      host.fields = [
        {
          key: 'test',
          type: 'checkbox',
          wrappers: ['label'],
          props: { label: 'Checkbox Label' },
        },
      ];
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl).toBeNull();
    });

    it('should not show label for multicheckbox type even if label is present', () => {
      host.fields = [
        {
          key: 'test',
          type: 'multicheckbox',
          wrappers: ['label'],
          props: { label: 'Multicheckbox Label' },
        },
      ];
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl).toBeNull();
    });
  });

  describe('tags and optional indicators', () => {
    it('should display tag with default sds-tag--info-white class', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: { label: 'Tagged Field', tagText: 'Required Tag' },
        },
      ];
      fixture.detectChanges();

      const tagEl = fixture.debugElement.query(By.css('.usa-tag'));
      expect(tagEl).toBeTruthy();
      expect(tagEl.nativeElement.textContent.trim()).toBe('Required Tag');
      expect(tagEl.nativeElement.classList.contains('sds-tag--info-white')).toBe(true);
    });

    it('should display tag with custom tagClass when provided', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: { label: 'Tagged Field', tagText: 'Custom Tag', tagClass: 'sds-tag--success' },
        },
      ];
      fixture.detectChanges();

      const tagEl = fixture.debugElement.query(By.css('.usa-tag'));
      expect(tagEl.nativeElement.classList.contains('sds-tag--success')).toBe(true);
    });

    it('should display (Optional) when neither required nor hideOptional', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: { label: 'Optional Field' },
        },
      ];
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl.nativeElement.textContent).toContain('(Optional)');
    });

    it('should omit (Optional) when required is true', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: { label: 'Required Field', required: true },
        },
      ];
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl.nativeElement.textContent).not.toContain('(Optional)');
    });

    it('should omit (Optional) when hideOptional is true', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: { label: 'Field', hideOptional: true },
        },
      ];
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl.nativeElement.textContent).not.toContain('(Optional)');
    });
  });

  describe('custom labelTemplate and tooltip', () => {
    it('should render props.labelTemplate when provided', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: {
            label: 'Fallback Label',
            labelTemplate: host.customLabelTpl,
          },
        },
      ];
      fixture.detectChanges();

      const customEl = fixture.debugElement.query(By.css('.custom-template-label'));
      expect(customEl).toBeTruthy();
      expect(customEl.nativeElement.textContent.trim()).toBe('Custom Template Content');
    });

    it('should render tooltip icon with position and tooltip class when tooltipText is set', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: {
            label: 'Tooltip Field',
            tooltipText: 'This is helper info',
            tooltipPosition: 'top',
            tooltipClass: 'custom-tooltip',
          },
        },
      ];
      fixture.detectChanges();

      const iconEl = fixture.debugElement.query(By.css('usa-icon'));
      expect(iconEl).toBeTruthy();
      expect(iconEl.componentInstance.position).toBe('top');
      expect(iconEl.componentInstance.icon).toBe('info-circle');
    });
  });

  describe('styling classes and error display', () => {
    it('should add usa-form-group--error when showError is true', () => {
      host.fields = [
        {
          key: 'test',
          type: 'input',
          wrappers: ['label'],
          props: { label: 'Error Field' },
          validators: {
            validation: [Validators.required],
          },
        },
      ];
      fixture.detectChanges();

      const formGroup = fixture.debugElement.query(By.css('.usa-form-group'));
      expect(formGroup.nativeElement.classList.contains('usa-form-group--error')).toBe(false);

      const control = host.form.get('test');
      control.setValue('');
      control.markAsTouched();
      fixture.detectChanges();

      expect(formGroup.nativeElement.classList.contains('usa-form-group--error')).toBe(true);
    });

    it('should apply margin-bottom-1 when parent fieldGroup length is 1', () => {
      host.fields = [
        {
          fieldGroup: [
            {
              key: 'child',
              type: 'input',
              wrappers: ['label'],
              props: { label: 'Only Child Field' },
            },
          ],
        },
      ];
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl.nativeElement.classList.contains('margin-bottom-1')).toBe(true);
    });

    it('should apply usa-sr-only and single-form-control when group is panel/accordion and parent is not formly-group', () => {
      host.fields = [
        {
          type: 'custom-container',
          fieldGroup: [
            {
              key: 'child',
              type: 'input',
              wrappers: ['label'],
              props: {
                label: 'Panel Control',
                group: 'panel',
              },
            },
          ],
        },
      ];
      fixture.detectChanges();

      const labelEl = fixture.debugElement.query(By.css('label.usa-label'));
      expect(labelEl.nativeElement.classList.contains('usa-sr-only')).toBe(true);

      const contentDiv = fixture.debugElement.query(By.css('.single-form-control'));
      expect(contentDiv).toBeTruthy();
    });
  });
});
