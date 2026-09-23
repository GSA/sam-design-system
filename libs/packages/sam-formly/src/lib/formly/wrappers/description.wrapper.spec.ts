import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FieldType, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyDescriptionWrapperComponent } from './description.wrapper';

@Component({
  selector: 'sam-dummy-input',
  template: '<input class="dummy-inner-input" [formControl]="formControl" [id]="id" />',
  standalone: false,
})
class DummyInputComponent extends FieldType {}

@Component({
  template: `
    <ng-template #customTpl>
      <div class="custom-tpl-desc">Custom Description Template</div>
    </ng-template>
    <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
  `,
  standalone: false,
})
class TestHostComponent {
  @ViewChild('customTpl', { static: true }) customTpl: TemplateRef<any>;
  form = new UntypedFormGroup({});
  fields: FormlyFieldConfig[] = [];
  model: any = {};
}

describe('FormlyDescriptionWrapperComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, DummyInputComponent, FormlyDescriptionWrapperComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [{ name: 'input', component: DummyInputComponent }],
          wrappers: [{ name: 'description', component: FormlyDescriptionWrapperComponent }],
        }),
      ],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  it('should render description text and project inner component', () => {
    host.fields = [
      {
        id: 'desc-input',
        key: 'field1',
        type: 'input',
        wrappers: ['description'],
        props: {
          description: 'Helpful instructions for this field',
        },
      },
    ];
    fixture.detectChanges();

    const descEl = fixture.debugElement.query(By.css('.usa-label--description'));
    expect(descEl).toBeTruthy();
    expect(descEl.nativeElement.textContent.trim()).toBe('Helpful instructions for this field');
    expect(descEl.attributes['id']).toBe('desc-input-description');

    const innerInput = fixture.debugElement.query(By.css('.dummy-inner-input'));
    expect(innerInput).toBeTruthy();
  });

  it('should render custom descriptionTemplate when provided', () => {
    host.fields = [
      {
        key: 'field1',
        type: 'input',
        wrappers: ['description'],
        props: {
          descriptionTemplate: host.customTpl,
        },
      },
    ];
    fixture.detectChanges();

    const tplEl = fixture.debugElement.query(By.css('.custom-tpl-desc'));
    expect(tplEl).toBeTruthy();
    expect(tplEl.nativeElement.textContent.trim()).toBe('Custom Description Template');
  });

  it('should not render description element when description is not provided', () => {
    host.fields = [
      {
        key: 'field1',
        type: 'input',
        wrappers: ['description'],
        props: {},
      },
    ];
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.usa-label--description'))).toBeNull();
  });
});
