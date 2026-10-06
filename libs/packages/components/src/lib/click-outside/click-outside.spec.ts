import { TestBed } from '@angular/core/testing';
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SDSClickOutsideDirective } from './click-outside.directive';

@Component({
  selector: 'test-cmp',
  template: `
    <div #var sds-click-outside (clickOutside)="clickOutsideHandler()">
      <div class="sds-autocomplete">
        <button class="autocomplete-child">Inside autocomplete</button>
      </div>
      <input class="usa-input" type="text" />
      <p class="test">test content</p>
    </div>
    <p class="test2">click outside target content</p>
  `,
  standalone: false,
})
class TestComponent {
  @Output() action: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('var', { static: false }) var;
  clickOutsideHandler() {
    this.action.emit(true);
  }
}

describe('The Sam Click Outside directive', () => {
  let directive: SDSClickOutsideDirective;
  let component: TestComponent;
  let fixture: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SDSClickOutsideDirective, TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    directive = fixture.debugElement
      .query(By.directive(SDSClickOutsideDirective))
      .injector.get(SDSClickOutsideDirective);
  });

  it('should compile', () => {
    expect(directive).toBeTruthy();
  });

  it('should emit clickOutside when clicking outside target content', () => {
    const spy = vi.fn();
    component.action.subscribe(spy);

    const outsideEl = fixture.debugElement.query(By.css('.test2'));
    outsideEl.nativeElement.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not emit clickOutside when clicking element inside .sds-autocomplete', () => {
    const spy = vi.fn();
    component.action.subscribe(spy);

    const autoEl = fixture.debugElement.query(By.css('.autocomplete-child'));
    autoEl.nativeElement.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should not emit clickOutside when clicking element with .usa-input', () => {
    const spy = vi.fn();
    component.action.subscribe(spy);

    const inputEl = fixture.debugElement.query(By.css('.usa-input'));
    inputEl.nativeElement.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should emit clickOutside when clicking element without autocomplete or input classes', () => {
    const spy = vi.fn();
    component.action.subscribe(spy);

    const el = fixture.debugElement.query(By.css('.test'));
    el.nativeElement.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle document click events via onClick handler directly', () => {
    const emitSpy = vi.spyOn(directive.clickOutside, 'emit');

    const outsideEl = fixture.debugElement.query(By.css('.test2')).nativeElement;
    directive.onClick({ target: outsideEl } as unknown as MouseEvent);
    expect(emitSpy).toHaveBeenCalledWith(undefined);

    emitSpy.mockClear();
    const inputEl = fixture.debugElement.query(By.css('.usa-input')).nativeElement;
    directive.onClick({ target: inputEl } as unknown as MouseEvent);
    expect(emitSpy).not.toHaveBeenCalled();
  });
});
