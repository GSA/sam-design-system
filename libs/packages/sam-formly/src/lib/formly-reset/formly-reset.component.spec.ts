import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsFormlyResetComponent } from './formly-reset.component';
import { DebugElement, Component } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';

describe('SdsFormlyResetComponent', () => {
  let component: SdsFormlyResetComponent;
  let buttonDe: DebugElement;
  let buttonElement: HTMLElement;
  let options: { "_initialModel": { "searchEntity": { "uniqueEntityIdSam": 20 } }, "formState": {}, "_hiddenFieldsForCheck": [] }

  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsFormlyResetComponent, TestHostComponent ],
      imports: [FontAwesomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    buttonDe = fixture.debugElement;
    buttonElement = buttonDe.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Reset All button', () => {
    expect(buttonElement.textContent).toContain('Reset All');
  });

  it('should reset to original options when clicked', () => {
    buttonDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.options).toBe(options);
  })
});


@Component({
  template: `
      <sds-formly-reset [options]="options"></sds-formly-reset>`
})
class TestHostComponent {
  options: FormlyFormOptions = {};
}
