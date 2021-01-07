import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  Component,
  ViewChild,
  DebugElement,
  ChangeDetectionStrategy
} from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  SdsAccordionComponent,
  SdsAccordionItemComponent,
  SdsAccordionTitleDirective,
  SdsAccordionContentDirective
} from './accordion.component';

// detail rows
@Component({
  template: `
    <sds-accordion-next [multi]="multi" #sdsAccordionDemo>
      <sds-accordion-item #first>
        <sds-accordion-title
          >Chief Financial Officers Council Grants Training</sds-accordion-title
        >
        <sds-accordion-content
          >Basic knowledge training modules on grants and cooperative agreements
          for Federal officials.</sds-accordion-content
        >
      </sds-accordion-item>
      <sds-accordion-item #second>
        <sds-accordion-title>Grants.gov Learning Center</sds-accordion-title>
        <sds-accordion-content
          >Learn and navigate the step-by-step process of the
          <a class="usa-link" href="javascript:none;">grants lifecycle</a>, from
          online application through post-award.</sds-accordion-content
        >
      </sds-accordion-item>
      <sds-accordion-item #third>
        <sds-accordion-title>Benefits.gov Benefit Finder</sds-accordion-title>
        <sds-accordion-content
          >Connect to this benefits.gov tool to find government benefit
          information and determine your eligibility.</sds-accordion-content
        >
      </sds-accordion-item>
      <sds-accordion-item #fourth>
        <sds-accordion-title
          >USA.gov Government Benefits, Grants, and Loans</sds-accordion-title
        >
        <sds-accordion-content
          >All you need to know about affordable housing, grants, and loans on
          USA.gov.</sds-accordion-content
        >
      </sds-accordion-item>
    </sds-accordion-next>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class WrapperComponent {
  @ViewChild(SdsAccordionComponent)
  accordionComponentRef: SdsAccordionComponent;
  @ViewChild('first') firstItem;

  multi = false;
}

describe('SdsAccordionComponent', () => {
  let component: SdsAccordionComponent;
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let accordionDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SdsAccordionComponent,
        SdsAccordionItemComponent,
        SdsAccordionTitleDirective,
        SdsAccordionContentDirective,
        WrapperComponent
      ],
      imports: [CommonModule, MatExpansionModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  // expandable rows
  describe('Accordion', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(WrapperComponent);
      const wrapperComponent = fixture.debugElement.componentInstance;
      component = wrapperComponent.accordionComponentRef;
      accordionDe = fixture.debugElement;
      wrapper = wrapperComponent;
      fixture.detectChanges();
    });

    it('should create', async(() => {
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
      fixture.detectChanges();
      const cont = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(cont.classes['mat-expanded']).toBeTruthy();
    });

    it('first item should close', () => {
      wrapper.firstItem.close();
      fixture.detectChanges();
      const cont = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(cont.classes['mat-expanded']).toBeFalsy();
    });

    it('first item should toggle', () => {
      wrapper.firstItem.close();
      wrapper.firstItem.toggle();
      fixture.detectChanges();
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

    it('accordion should openAll and closeAll', () => {
      component.multi = true;
      fixture.detectChanges();
      component.openAll();
      fixture.detectChanges();
      const cont = accordionDe.query(By.css('.mat-expansion-panel'));
      expect(cont.classes['mat-expanded']).toBeTruthy();
      component.closeAll();
      fixture.detectChanges();
      expect(cont.classes['mat-expanded']).toBeFalsy();
    });

    it('accordion should toggleMulti', () => {
      component.toggleMulti();
      fixture.detectChanges();
      expect(component.multi).toBeTruthy();
    });
  });
});
