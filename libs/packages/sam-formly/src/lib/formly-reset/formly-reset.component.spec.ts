import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsFormlyResetComponent } from './formly-reset.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('SdsFormlyResetComponent', () => {
  let component: SdsFormlyResetComponent;
  let fixture: ComponentFixture<SdsFormlyResetComponent>;
  let buttonDe: DebugElement;
  let buttonElement: HTMLElement;
  let options: { "_initialModel": { "searchEntity": { "uniqueEntityIdSam": 20 } }, "formState": {}, "_hiddenFieldsForCheck": [] }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsFormlyResetComponent ],
      imports: [FontAwesomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsFormlyResetComponent);
    component = fixture.componentInstance;
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
    // click(buttonElement);
    expect(component.options).toBe(options);
  })
});
