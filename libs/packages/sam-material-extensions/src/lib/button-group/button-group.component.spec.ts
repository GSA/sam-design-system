import { ChangeDetectionStrategy, Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { By } from '@angular/platform-browser';

import {
  SdsButtonGroupComponent,
  SdsButtonGroupOptionComponent
} from './button-group.component';

@Component({
  template: `
    <sds-button-group
      #buttonGroup
      [mode]="'radio'"
      class="sds-button-group"
    >
      <sds-button-group-option value="reports">
        Reports
      </sds-button-group-option>
      <sds-button-group-option value="subscriptions">
        Subscriptions
      </sds-button-group-option>
      <sds-button-group-option value="history">
        History
      </sds-button-group-option>
    </sds-button-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class RadioWrapperComponent {
  @ViewChild('buttonGroup') accordionComponentRef: SdsButtonGroupComponent;
}

@Component({
  template: `
    <sds-button-group
      #buttonGroup
      [mode]="'checkbox'"
      class="sds-button-group sds-button-group--secondary"
    >
      <sds-button-group-option value="reports">
        Reports
      </sds-button-group-option>
      <sds-button-group-option value="subscriptions">
        Subscriptions
      </sds-button-group-option>
      <sds-button-group-option value="history">
        History
      </sds-button-group-option>
    </sds-button-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class CheckboxWrapperComponent {
  @ViewChild('buttonGroup') accordionComponentRef: SdsButtonGroupComponent;
}

describe('ButtonGroupComponent', () => {
  let component: RadioWrapperComponent;
  let fixture: ComponentFixture<RadioWrapperComponent>;
  let buttonGroupEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SdsButtonGroupComponent,
        SdsButtonGroupOptionComponent,
        RadioWrapperComponent,
        CheckboxWrapperComponent,
      ],
      imports: [MatButtonToggleModule]
    }).compileComponents();
  });

  describe('RadioWrapper', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(RadioWrapperComponent);
      component = fixture.componentInstance;
      buttonGroupEl = fixture.debugElement;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should show 3 buttons', () => {
      const nativeEl = buttonGroupEl.nativeElement;
      const buttonsDisplayed = nativeEl.querySelectorAll('.usa-button');
      expect(buttonsDisplayed.length).toEqual(3);
    });
  
    it('clicking two buttons should cause only second button to have outline classes removed', () => {
      const nativeEl = buttonGroupEl.nativeElement;
      const buttonsDisplayed = nativeEl.querySelectorAll('.usa-button');
      buttonsDisplayed[0].click();
      buttonsDisplayed[1].click();
      fixture.detectChanges();
      const usaButtonsDe = buttonGroupEl.queryAll(By.css('.usa-button'));
      expect(usaButtonsDe[0].classes['usa-button--outline']).toBeTruthy();
      expect(usaButtonsDe[1].classes['usa-button--outline']).toBeFalsy();
      expect(usaButtonsDe[2].classes['usa-button--outline']).toBeTruthy();
    });
  });

  describe('Checkbox Wrapper', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(CheckboxWrapperComponent);
      component = fixture.componentInstance;
      buttonGroupEl = fixture.debugElement;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('clicking two buttons should cause both to have outline classes removed', () => {
      const nativeEl = buttonGroupEl.nativeElement;
      const buttonsDisplayed = nativeEl.querySelectorAll('.usa-button');
      buttonsDisplayed[0].click();
      buttonsDisplayed[1].click();
      fixture.detectChanges();
      const usaButtonsDe = buttonGroupEl.queryAll(By.css('.usa-button'));
      expect(usaButtonsDe[0].classes['usa-button--outline']).toBeFalsy();
      expect(usaButtonsDe[1].classes['usa-button--outline']).toBeFalsy();
      expect(usaButtonsDe[2].classes['usa-button--outline']).toBeTruthy();
    });
  })

});
