import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

// Load the implementations that should be tested
import { SDSTabOutsideDirective } from './taboutside.directive';

@Component({
  selector: 'test-cmp',
  template: `
<div #var sds-tab-outside
(tabOutside)="tabOutsideHandler()">
<p class="test">
test content
</p>
</div>
<p class="test2">
click outside target content
</p>`
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
    directive = fixture.debugElement
      .query(
        By.directive(SDSTabOutsideDirective)
      )
      .injector.get(SDSTabOutsideDirective);
  });

  it('should compile', () => {
    expect(true).toBe(true);
  });

  it('should check for tab outside', () => {
    component.action.subscribe(val => {
      expect(val).toBe(true);
    });
    const el = fixture.debugElement.query(By.css('.test'));
    const el2 = fixture.debugElement.query(By.css('.test2'));
    directive.hasFocusChanged(el.nativeElement);
    directive.hasFocusChanged(el2.nativeElement);
  });
});
