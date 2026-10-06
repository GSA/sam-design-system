import { TestBed } from '@angular/core/testing';
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SDSTabOutsideDirective } from './taboutside.directive';

@Component({
  selector: 'test-cmp',
  template: `
    <div #var sds-tab-outside (tabOutside)="tabOutsideHandler()">
      <button class="test">inside content</button>
    </div>
    <button class="test2">outside target content</button>
  `,
  standalone: false,
})
class TestComponent {
  @Output() action: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('var', { static: false }) var;
  tabOutsideHandler() {
    this.action.emit(true);
  }
}

describe('The Sam Tab Outside directive', () => {
  let directive: SDSTabOutsideDirective;
  let component: TestComponent;
  let fixture: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SDSTabOutsideDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.directive(SDSTabOutsideDirective)).injector.get(SDSTabOutsideDirective);
  });

  it('should compile', () => {
    expect(directive).toBeTruthy();
  });

  it('should not emit tabOutside when focus is inside host element', () => {
    const spy = vi.fn();
    component.action.subscribe(spy);

    const insideEl = fixture.debugElement.query(By.css('.test')).nativeElement;
    directive.hasFocusChanged(insideEl);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should emit tabOutside when focus is outside host element', () => {
    const spy = vi.fn();
    component.action.subscribe(spy);

    const outsideEl = fixture.debugElement.query(By.css('.test2')).nativeElement;
    directive.hasFocusChanged(outsideEl);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should listen to document keyup events when focused element is outside', () => {
    const spy = vi.fn();
    component.action.subscribe(spy);

    const outsideEl = fixture.debugElement.query(By.css('.test2')).nativeElement;
    const event = new KeyboardEvent('keyup', { bubbles: true });
    outsideEl.dispatchEvent(event);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should listen to document keyup events and not emit when focused element is inside', () => {
    const spy = vi.fn();
    component.action.subscribe(spy);

    const insideEl = fixture.debugElement.query(By.css('.test')).nativeElement;
    const event = new KeyboardEvent('keyup', { bubbles: true });
    insideEl.dispatchEvent(event);

    expect(spy).not.toHaveBeenCalled();
  });
});
