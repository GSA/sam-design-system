import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { By } from '@angular/platform-browser';

import { SdsButtonGroupComponent, SdsButtonGroupOptionComponent } from './button-group.component';

@Component({
  template: `
    <sds-button-group #buttonGroup [mode]="'radio'" class="sds-button-group" (change)="onChange($event)">
      <sds-button-group-option value="reports"> Reports </sds-button-group-option>
      <sds-button-group-option value="subscriptions"> Subscriptions </sds-button-group-option>
      <sds-button-group-option value="history" [disabled]="historyDisabled"> History </sds-button-group-option>
    </sds-button-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
class RadioWrapperComponent {
  @ViewChild('buttonGroup') accordionComponentRef: SdsButtonGroupComponent;
  historyDisabled = false;
  lastChangeEvent: any = null;
  constructor(public cdr: ChangeDetectorRef) {}
  onChange(event: any) {
    this.lastChangeEvent = event;
  }
}

@Component({
  template: `
    <sds-button-group
      #buttonGroup
      [mode]="'checkbox'"
      class="sds-button-group sds-button-group--secondary"
      (change)="onChange($event)"
    >
      <sds-button-group-option value="reports"> Reports </sds-button-group-option>
      <sds-button-group-option value="subscriptions"> Subscriptions </sds-button-group-option>
      <sds-button-group-option value="history"> History </sds-button-group-option>
    </sds-button-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
class CheckboxWrapperComponent {
  @ViewChild('buttonGroup') accordionComponentRef: SdsButtonGroupComponent;
  lastChangeEvent: any = null;
  onChange(event: any) {
    this.lastChangeEvent = event;
  }
}

@Component({
  template: `
    <sds-button-group #buttonGroup [modularDashboard]="modularDashboard" [mode]="mode" (change)="onChange($event)">
      <sds-button-group-option value="opt1" [checked]="opt1Checked" aria-label="Option 1">
        Option 1
      </sds-button-group-option>
      <sds-button-group-option value="opt2" [disabled]="opt2Disabled" aria-label="Option 2">
        Option 2
      </sds-button-group-option>
      <sds-button-group-option value="opt3" aria-label="Option 3"> Option 3 </sds-button-group-option>
    </sds-button-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
class ModularWrapperComponent {
  @ViewChild('buttonGroup') buttonGroupRef: SdsButtonGroupComponent;
  modularDashboard = true;
  mode: 'checkbox' | 'radio' = 'checkbox';
  opt1Checked = false;
  opt2Disabled = false;
  lastChangeEvent: any = null;
  onChange(event: any) {
    this.lastChangeEvent = event;
  }
}

describe('ButtonGroupComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SdsButtonGroupComponent,
        SdsButtonGroupOptionComponent,
        RadioWrapperComponent,
        CheckboxWrapperComponent,
        ModularWrapperComponent,
      ],
      imports: [MatButtonToggleModule],
    }).compileComponents();
  });

  describe('RadioWrapper', () => {
    let component: RadioWrapperComponent;
    let fixture: ComponentFixture<RadioWrapperComponent>;
    let buttonGroupEl: DebugElement;

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

    it('should have segmented host class and start with all outline classes present', () => {
      const groupEl = buttonGroupEl.query(By.directive(SdsButtonGroupComponent));
      expect(groupEl.classes['sds-button-group--segmented']).toBeTruthy();
      expect(groupEl.classes['sds-button-group--modular']).toBeFalsy();

      const usaButtonsDe = buttonGroupEl.queryAll(By.css('.usa-button'));
      expect(usaButtonsDe.length).toBe(3);
      usaButtonsDe.forEach((btn) => {
        expect(btn.classes['usa-button--outline']).toBeTruthy();
      });
    });

    it('clicking an already selected radio button should keep it checked', () => {
      const nativeEl = buttonGroupEl.nativeElement;
      const buttonsDisplayed = nativeEl.querySelectorAll('.usa-button');
      buttonsDisplayed[0].click();
      fixture.detectChanges();
      let usaButtonsDe = buttonGroupEl.queryAll(By.css('.usa-button'));
      expect(usaButtonsDe[0].classes['usa-button--outline']).toBeFalsy();

      buttonsDisplayed[0].click();
      fixture.detectChanges();
      usaButtonsDe = buttonGroupEl.queryAll(By.css('.usa-button'));
      expect(usaButtonsDe[0].classes['usa-button--outline']).toBeFalsy();
    });

    it('should emit change event on selection change', () => {
      const nativeEl = buttonGroupEl.nativeElement;
      const buttonsDisplayed = nativeEl.querySelectorAll('.usa-button');
      buttonsDisplayed[1].click();
      fixture.detectChanges();

      expect(component.lastChangeEvent).toBeTruthy();
      expect(component.lastChangeEvent.value).toBe('subscriptions');
    });

    it('should not select a disabled option when clicked', () => {
      component.historyDisabled = true;
      component.cdr.markForCheck();
      fixture.detectChanges();

      const nativeEl = buttonGroupEl.nativeElement;
      const buttonsDisplayed = nativeEl.querySelectorAll('.usa-button');
      buttonsDisplayed[2].click();
      fixture.detectChanges();

      const usaButtonsDe = buttonGroupEl.queryAll(By.css('.usa-button'));
      expect(usaButtonsDe[2].classes['usa-button--outline']).toBeTruthy();
    });
  });

  describe('Checkbox Wrapper', () => {
    let component: CheckboxWrapperComponent;
    let fixture: ComponentFixture<CheckboxWrapperComponent>;
    let buttonGroupEl: DebugElement;

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

    it('clicking an active checkbox button toggles it off and restores outline class', () => {
      const nativeEl = buttonGroupEl.nativeElement;
      const buttonsDisplayed = nativeEl.querySelectorAll('.usa-button');
      buttonsDisplayed[0].click();
      fixture.detectChanges();
      let usaButtonsDe = buttonGroupEl.queryAll(By.css('.usa-button'));
      expect(usaButtonsDe[0].classes['usa-button--outline']).toBeFalsy();

      buttonsDisplayed[0].click();
      fixture.detectChanges();
      usaButtonsDe = buttonGroupEl.queryAll(By.css('.usa-button'));
      expect(usaButtonsDe[0].classes['usa-button--outline']).toBeTruthy();
    });

    it('should emit change event with array of selected values in multiple mode', () => {
      const nativeEl = buttonGroupEl.nativeElement;
      const buttonsDisplayed = nativeEl.querySelectorAll('.usa-button');
      buttonsDisplayed[0].click();
      fixture.detectChanges();
      expect(component.lastChangeEvent.value).toEqual(['reports']);

      buttonsDisplayed[1].click();
      fixture.detectChanges();
      expect(component.lastChangeEvent.value).toEqual(['reports', 'subscriptions']);

      buttonsDisplayed[0].click();
      fixture.detectChanges();
      expect(component.lastChangeEvent.value).toEqual(['subscriptions']);
    });
  });

  describe('Modular Dashboard Wrapper', () => {
    let modularFixture: ComponentFixture<ModularWrapperComponent>;
    let modularComponent: ModularWrapperComponent;
    let modularDe: DebugElement;

    beforeEach(() => {
      modularFixture = TestBed.createComponent(ModularWrapperComponent);
      modularComponent = modularFixture.componentInstance;
      modularDe = modularFixture.debugElement;
      modularFixture.detectChanges();
    });

    it('should force mode to radio on ngOnInit when modularDashboard is true', () => {
      expect(modularComponent.buttonGroupRef.mode).toBe('radio');
    });

    it('should apply sds-button-group--modular host class', () => {
      const groupEl = modularDe.query(By.directive(SdsButtonGroupComponent));
      expect(groupEl.classes['sds-button-group--modular']).toBeTruthy();
      expect(groupEl.classes['sds-button-group--segmented']).toBeTruthy();
    });

    it('should render items with modular class and without usa-button classes', () => {
      const modularItems = modularDe.queryAll(By.css('.modular'));
      expect(modularItems.length).toBe(3);

      const usaButtons = modularDe.queryAll(By.css('.usa-button'));
      expect(usaButtons.length).toBe(0);
    });

    it('should set aria-label attribute from option', () => {
      const toggles = modularDe.queryAll(By.css('mat-button-toggle'));
      const btn0 = toggles[0].query(By.css('button'));
      const btn1 = toggles[1].query(By.css('button'));
      const btn2 = toggles[2].query(By.css('button'));
      expect(btn0.attributes['aria-label']).toBe('Option 1');
      expect(btn1.attributes['aria-label']).toBe('Option 2');
      expect(btn2.attributes['aria-label']).toBe('Option 3');
    });

    it('should respect initial checked input on option', () => {
      const checkedFixture = TestBed.createComponent(ModularWrapperComponent);
      checkedFixture.componentInstance.opt1Checked = true;
      checkedFixture.detectChanges();

      const toggles = checkedFixture.debugElement.queryAll(By.css('mat-button-toggle'));
      expect(toggles[0].classes['mat-button-toggle-checked']).toBeTruthy();
      expect(toggles[1].classes['mat-button-toggle-checked']).toBeFalsy();
    });

    it('should respect disabled input on option and prevent selection', () => {
      const disabledFixture = TestBed.createComponent(ModularWrapperComponent);
      disabledFixture.componentInstance.opt2Disabled = true;
      disabledFixture.detectChanges();

      const toggles = disabledFixture.debugElement.queryAll(By.css('mat-button-toggle'));
      expect(toggles[1].classes['mat-button-toggle-disabled']).toBeTruthy();

      const buttonEl = toggles[1].query(By.css('button'));
      buttonEl.nativeElement.click();
      disabledFixture.detectChanges();

      expect(disabledFixture.componentInstance.lastChangeEvent).toBeNull();
      expect(toggles[1].classes['mat-button-toggle-checked']).toBeFalsy();
    });

    it('should emit change event when modular option is clicked', () => {
      const toggles = modularDe.queryAll(By.css('mat-button-toggle'));
      const buttonEl = toggles[0].query(By.css('button'));
      buttonEl.nativeElement.click();
      modularFixture.detectChanges();

      expect(modularComponent.lastChangeEvent).toBeTruthy();
      expect(modularComponent.lastChangeEvent.value).toBe('opt1');
    });
  });

  describe('SdsButtonGroupComponent direct unit tests', () => {
    it('should have default properties', () => {
      const comp = new SdsButtonGroupComponent();
      expect(comp.mode).toBe('radio');
      expect(comp.modularDashboard).toBe(false);
      expect(comp.classesToApply).toEqual({});

      // ngOnInit when modularDashboard is false should keep mode intact
      comp.mode = 'checkbox';
      comp.ngOnInit();
      expect(comp.mode).toBe('checkbox');

      // ngOnInit when modularDashboard is true should switch mode to radio
      comp.modularDashboard = true;
      comp.ngOnInit();
      expect(comp.mode).toBe('radio');
    });
  });

  describe('Modular Dashboard', () => {
    it('should set mode to radio when modularDashboard is true', () => {
      const bg = new SdsButtonGroupComponent();
      bg.mode = 'checkbox';
      bg.modularDashboard = true;
      bg.ngOnInit();
      expect(bg.mode).toBe('radio');
    });
  });
});
