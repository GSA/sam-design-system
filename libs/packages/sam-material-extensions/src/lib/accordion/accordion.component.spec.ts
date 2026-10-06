import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, ViewChild, DebugElement, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  SdsAccordionComponent,
  SdsAccordionItemComponent,
  SdsAccordionTitleDirective,
  SdsAccordionContentDirective,
} from './accordion.component';

// detail rows
@Component({
  template: `
    <sds-accordion-next [multi]="multi" #sdsAccordionDemo>
      <sds-accordion-item #first>
        <sds-accordion-title>Chief Financial Officers Council Grants Training</sds-accordion-title>
        <sds-accordion-content
          >Basic knowledge training modules on grants and cooperative agreements for Federal
          officials.</sds-accordion-content
        >
      </sds-accordion-item>
      <sds-accordion-item #second>
        <sds-accordion-title>Grants.gov Learning Center</sds-accordion-title>
        <sds-accordion-content
          >Learn and navigate the step-by-step process of the
          <a class="usa-link" href="javascript:none;">grants lifecycle</a>, from online application through
          post-award.</sds-accordion-content
        >
      </sds-accordion-item>
      <sds-accordion-item #third>
        <sds-accordion-title>Benefits.gov Benefit Finder</sds-accordion-title>
        <sds-accordion-content
          >Connect to this benefits.gov tool to find government benefit information and determine your
          eligibility.</sds-accordion-content
        >
      </sds-accordion-item>
      <sds-accordion-item #fourth>
        <sds-accordion-title>USA.gov Government Benefits, Grants, and Loans</sds-accordion-title>
        <sds-accordion-content
          >All you need to know about affordable housing, grants, and loans on USA.gov.</sds-accordion-content
        >
      </sds-accordion-item>
    </sds-accordion-next>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
class WrapperComponent {
  @ViewChild(SdsAccordionComponent)
  accordionComponentRef: SdsAccordionComponent;
  @ViewChild('first') firstItem;
  @ViewChild('second') secondItem;

  constructor(public cdr: ChangeDetectorRef) {}

  multi = false;
}

@Component({
  template: `
    <sds-accordion-next
      [displayMode]="displayMode"
      [collapsedHeight]="collapsedHeight"
      [expandedHeight]="expandedHeight"
      [multi]="multi"
    >
      <sds-accordion-item #preExpandedItem [expanded]="true">
        <sds-accordion-title>Pre-expanded Title</sds-accordion-title>
        <sds-accordion-content>Pre-expanded Content</sds-accordion-content>
      </sds-accordion-item>
      <sds-accordion-item #preDisabledItem [disabled]="true">
        <sds-accordion-title>Disabled Title</sds-accordion-title>
        <sds-accordion-content>Disabled Content</sds-accordion-content>
      </sds-accordion-item>
    </sds-accordion-next>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
class ConfiguredAccordionWrapperComponent {
  @ViewChild(SdsAccordionComponent) accordionComponentRef: SdsAccordionComponent;
  @ViewChild('preExpandedItem') preExpandedItem: SdsAccordionItemComponent;
  @ViewChild('preDisabledItem') preDisabledItem: SdsAccordionItemComponent;

  displayMode = 'default';
  collapsedHeight = '44px';
  expandedHeight = '60px';
  multi = false;

  constructor(public cdr: ChangeDetectorRef) {}
}

describe('SdsAccordionComponent', () => {
  let component: SdsAccordionComponent;
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let accordionDe: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        SdsAccordionComponent,
        SdsAccordionItemComponent,
        SdsAccordionTitleDirective,
        SdsAccordionContentDirective,
        WrapperComponent,
        ConfiguredAccordionWrapperComponent,
      ],
      imports: [CommonModule, MatExpansionModule, BrowserAnimationsModule],
    }).compileComponents();
  }));

  // expandable rows
  describe('Accordion', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(WrapperComponent);
      fixture.detectChanges();

      const wrapperComponent = fixture.debugElement.componentInstance;
      component = wrapperComponent.accordionComponentRef;
      accordionDe = fixture.debugElement;
      wrapper = wrapperComponent;
    });

    it('should create', waitForAsync(() => {
      expect(component).toBeTruthy();
    }));

    it('should have 4 items', () => {
      expect(component.accordionItems.length).toEqual(4);
    });

    it('first item should start closed', () => {
      const cont = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(cont.classes['mat-expanded']).toBeFalsy();
    });

    it('first item should open', () => {
      wrapper.firstItem.open();
      fixture.componentInstance.cdr.detectChanges();
      const cont = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(cont.classes['mat-expanded']).toBeTruthy();
    });

    it('first item should close', () => {
      wrapper.firstItem.close();
      fixture.componentInstance.cdr.detectChanges();
      const cont = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(cont.classes['mat-expanded']).toBeFalsy();
    });

    it('first item should toggle', () => {
      wrapper.firstItem.close();
      fixture.componentInstance.cdr.detectChanges();
      wrapper.firstItem.toggle();
      fixture.componentInstance.cdr.detectChanges();
      const cont = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(cont.classes['mat-expanded']).toBeTruthy();
    });

    it('first item should toggleDisabled', () => {
      wrapper.firstItem.toggleDisabled();
      fixture.detectChanges();
      const cont = accordionDe.query(By.css('.mat-expansion-panel-header'));
      expect(cont.attributes['aria-disabled']).toBeTruthy();
      wrapper.firstItem.toggleDisabled();
      fixture.detectChanges();
      expect(cont.attributes['aria-disabled']).toBe('false');
    });

    it('toggleDisabled should collapse an already expanded item and reset expanded flag', () => {
      wrapper.firstItem.open();
      fixture.componentInstance.cdr.detectChanges();
      expect(wrapper.firstItem.expanded).toBe(true);

      wrapper.firstItem.toggleDisabled();
      fixture.componentInstance.cdr.detectChanges();

      expect(wrapper.firstItem.disabled).toBe(true);
      expect(wrapper.firstItem.expanded).toBe(false);

      const panel = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(panel.classes['mat-expanded']).toBeFalsy();
    });

    it('first item toggle should close when already open', () => {
      wrapper.firstItem.open();
      fixture.componentInstance.cdr.detectChanges();
      expect(wrapper.firstItem.expanded).toBe(true);

      wrapper.firstItem.toggle();
      fixture.componentInstance.cdr.detectChanges();
      expect(wrapper.firstItem.expanded).toBe(false);

      const panel = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(panel.classes['mat-expanded']).toBeFalsy();
    });

    it('open and close should be idempotent', () => {
      wrapper.firstItem.open();
      fixture.componentInstance.cdr.detectChanges();
      expect(wrapper.firstItem.expanded).toBe(true);
      wrapper.firstItem.open();
      fixture.componentInstance.cdr.detectChanges();
      expect(wrapper.firstItem.expanded).toBe(true);

      wrapper.firstItem.close();
      fixture.componentInstance.cdr.detectChanges();
      expect(wrapper.firstItem.expanded).toBe(false);
      wrapper.firstItem.close();
      fixture.componentInstance.cdr.detectChanges();
      expect(wrapper.firstItem.expanded).toBe(false);
    });

    it('clicking panel header should toggle panel expansion and indicator class', () => {
      const headers = accordionDe.queryAll(By.css('.mat-expansion-panel-header'));
      const panels = accordionDe.queryAll(By.css('.mat-expansion-panel'));
      const indicator = panels[0].query(By.css('.sds-expansion-indicator'));

      expect(panels[0].classes['mat-expanded']).toBeFalsy();
      expect(indicator.classes['sds-expansion-indicator--expanded']).toBeFalsy();

      headers[0].nativeElement.click();
      fixture.detectChanges();

      expect(panels[0].classes['mat-expanded']).toBeTruthy();
      expect(indicator.classes['sds-expansion-indicator--expanded']).toBeTruthy();
      expect(wrapper.firstItem.expanded).toBe(true);

      headers[0].nativeElement.click();
      fixture.detectChanges();

      expect(panels[0].classes['mat-expanded']).toBeFalsy();
      expect(indicator.classes['sds-expansion-indicator--expanded']).toBeFalsy();
      expect(wrapper.firstItem.expanded).toBe(false);
    });

    it('content span should have display-none class when collapsed and not when expanded', () => {
      const panel = accordionDe.query(By.css('.mat-expansion-panel'));
      const contentSpan = panel.query(By.css('span.display-none'));
      expect(contentSpan).toBeTruthy();

      wrapper.firstItem.open();
      fixture.componentInstance.cdr.detectChanges();

      const hiddenSpan = panel.query(By.css('span.display-none'));
      expect(hiddenSpan).toBeFalsy();
    });

    it('clicking disabled panel header should not expand panel', () => {
      wrapper.firstItem.disabled = true;
      fixture.componentInstance.cdr.detectChanges();

      const headers = accordionDe.queryAll(By.css('.mat-expansion-panel-header'));
      headers[0].nativeElement.click();
      fixture.detectChanges();

      expect(wrapper.firstItem.expanded).toBe(false);
      const panel = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(panel.classes['mat-expanded']).toBeFalsy();
    });

    it('in single mode (multi=false), expanding one panel closes previously open panel', () => {
      wrapper.multi = false;
      fixture.componentInstance.cdr.detectChanges();

      const headers = accordionDe.queryAll(By.css('.mat-expansion-panel-header'));
      const panels = accordionDe.queryAll(By.css('.mat-expansion-panel'));

      headers[0].nativeElement.click();
      fixture.detectChanges();
      expect(panels[0].classes['mat-expanded']).toBeTruthy();
      expect(panels[1].classes['mat-expanded']).toBeFalsy();

      headers[1].nativeElement.click();
      fixture.detectChanges();
      expect(panels[0].classes['mat-expanded']).toBeFalsy();
      expect(panels[1].classes['mat-expanded']).toBeTruthy();
    });

    it('in multi mode, clicking multiple headers keeps panels expanded simultaneously', () => {
      wrapper.multi = true;
      component.multi = true;
      fixture.componentInstance.cdr.detectChanges();

      const headers = accordionDe.queryAll(By.css('.mat-expansion-panel-header'));
      const panels = accordionDe.queryAll(By.css('.mat-expansion-panel'));

      headers[0].nativeElement.click();
      fixture.detectChanges();
      headers[1].nativeElement.click();
      fixture.detectChanges();

      expect(panels[0].classes['mat-expanded']).toBeTruthy();
      expect(panels[1].classes['mat-expanded']).toBeTruthy();
    });

    it('accordion should openAll and closeAll', () => {
      component.multi = true;
      fixture.componentInstance.cdr.detectChanges();
      component.openAll();
      fixture.componentInstance.cdr.detectChanges();
      const cont = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(cont.classes['mat-expanded']).toBeTruthy();
      component.closeAll();
      fixture.componentInstance.cdr.detectChanges();

      expect(cont.classes['mat-expanded']).toBeFalsy();
    });

    it('accordion should toggleMulti, emit multiChange, and close open panels', () => {
      const emitSpy = vi.spyOn(component.multiChange, 'emit');
      const closeAllSpy = vi.spyOn(component.accordion, 'closeAll');

      wrapper.firstItem.open();
      fixture.componentInstance.cdr.detectChanges();

      component.toggleMulti();
      fixture.componentInstance.cdr.detectChanges();

      expect(component.multi).toBe(true);
      expect(emitSpy).toHaveBeenCalledWith(true);
      expect(closeAllSpy).toHaveBeenCalled();

      component.toggleMulti();
      fixture.componentInstance.cdr.detectChanges();

      expect(component.multi).toBe(false);
      expect(emitSpy).toHaveBeenCalledWith(false);
    });
  });

  describe('Configured Accordion Wrapper', () => {
    let configuredFixture: ComponentFixture<ConfiguredAccordionWrapperComponent>;
    let configuredComponent: ConfiguredAccordionWrapperComponent;
    let configuredDe: DebugElement;

    beforeEach(() => {
      configuredFixture = TestBed.createComponent(ConfiguredAccordionWrapperComponent);
      configuredComponent = configuredFixture.componentInstance;
      configuredDe = configuredFixture.debugElement;
      configuredFixture.detectChanges();
    });

    it('should initialize pre-expanded item in open state', () => {
      expect(configuredComponent.preExpandedItem.expanded).toBe(true);
      const panels = configuredDe.queryAll(By.css('.mat-expansion-panel'));
      expect(panels[0].classes['mat-expanded']).toBeTruthy();
      const indicator = panels[0].query(By.css('.sds-expansion-indicator'));
      expect(indicator.classes['sds-expansion-indicator--expanded']).toBeTruthy();
    });

    it('should initialize pre-disabled item in disabled state', () => {
      expect(configuredComponent.preDisabledItem.disabled).toBe(true);
      const headers = configuredDe.queryAll(By.css('.mat-expansion-panel-header'));
      expect(headers[1].attributes['aria-disabled']).toBe('true');
    });

    it('should pass displayMode, collapsedHeight, and expandedHeight', () => {
      expect(configuredComponent.accordionComponentRef.displayMode).toBe('default');
      expect(configuredComponent.accordionComponentRef.collapsedHeight).toBe('44px');
      expect(configuredComponent.accordionComponentRef.expandedHeight).toBe('60px');

      const accordion = configuredDe.query(By.directive(SdsAccordionComponent));
      expect(accordion).toBeTruthy();
    });
  });

  describe('Direct component defaults', () => {
    it('SdsAccordionComponent should default displayMode to flat and multi to false', () => {
      const comp = new SdsAccordionComponent();
      expect(comp.displayMode).toBe('flat');
      expect(comp.multi).toBe(false);
    });

    it('SdsAccordionItemComponent should default expanded and disabled to false', () => {
      const item = new SdsAccordionItemComponent();
      expect(item.expanded).toBe(false);
      expect(item.disabled).toBe(false);
    });
  });
});
