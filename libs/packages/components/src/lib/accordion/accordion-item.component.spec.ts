import {
  async,
  TestBed,
  fakeAsync,
  flush
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsAccordionModule } from './accordion.module';

describe('SdsAccordionItem', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SdsAccordionModule, NoopAnimationsModule],
      declarations: [AccordionItem]
    });
    TestBed.compileComponents();
  }));

  it('should expand and collapse the accordion item', fakeAsync(() => {
    const fixture = TestBed.createComponent(AccordionItem);
    const itemEl = fixture.nativeElement.querySelector('.sds-accordion__item');
    fixture.detectChanges();

    expect(itemEl.classList).not.toContain('sds-accordion__item--expanded');

    fixture.componentInstance.expanded = true;
    fixture.detectChanges();
    flush();

    expect(itemEl.classList).toContain('sds-accordion__item--expanded');
  }));

  it('emit correct events for change in accordion item expanded state', () => {
    const fixture = TestBed.createComponent(AccordionItem);
    fixture.componentInstance.expanded = true;
    fixture.detectChanges();
    expect(fixture.componentInstance.openCallback).toHaveBeenCalled();

    fixture.componentInstance.expanded = false;
    fixture.detectChanges();
    expect(fixture.componentInstance.closeCallback).toHaveBeenCalled();
  });

  it('should create a unique panel id for each accordion item', () => {
    const fixtureOne = TestBed.createComponent(AccordionItem);
    const headerElOne = fixtureOne.nativeElement.querySelector('.sds-accordion__trigger');
    const fixtureTwo = TestBed.createComponent(AccordionItem);
    const headerElTwo = fixtureTwo.nativeElement.querySelector('.sds-accordion__trigger');
    fixtureOne.detectChanges();
    fixtureTwo.detectChanges();

    const panelIdOne = headerElOne.getAttribute('aria-controls');
    const panelIdTwo = headerElTwo.getAttribute('aria-controls');
    expect(panelIdOne).not.toBe(panelIdTwo);
  });

  it('should set `aria-labelledby` of the content to the header id', () => {
    const fixture = TestBed.createComponent(AccordionItem);
    const headerEl = fixture.nativeElement.querySelector('.sds-accordion__trigger');
    const contentEl = fixture.nativeElement.querySelector('.sam-accordion__panel');

    fixture.detectChanges();

    const headerId = headerEl.getAttribute('id');
    const contentLabel = contentEl.getAttribute('aria-labelledby');

    expect(headerId).toBeTruthy();
    expect(contentLabel).toBeTruthy();
    expect(headerId).toBe(contentLabel);
  });

  it('should set the proper role on the content element', () => {
    const fixture = TestBed.createComponent(AccordionItem);
    const contentEl = fixture.nativeElement.querySelector('.sam-accordion__panel');

    expect(contentEl.getAttribute('role')).toBe('region');
  });

});

@Component({
  template: `
    <sds-accordion-item
      [expanded]="expanded"
      [disabled]="disabled"
      (opened)="openCallback()"
      (closed)="closeCallback()"
    >
      <sds-accordion-item-header>Accordion Title</sds-accordion-item-header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </sds-accordion-item>
  `
})
class AccordionItem {
  expanded = false;
  hideToggle = false;
  disabled = false;
  openCallback = jasmine.createSpy('openCallback');
  closeCallback = jasmine.createSpy('closeCallback');
}
