import {
  TestBed, async,
  fakeAsync, tick
} from '@angular/core/testing';
import {
  Component, Output,
  ViewChild, EventEmitter
} from '@angular/core';
import { By } from '@angular/platform-browser';

// Load the implementations that should be tested
import { SDSClickOutsideDirective } from './click-outside.directive';

@Component({
  selector: 'test-cmp',
  template: `
    <div #var sds-click-outside (clickOutside)="clickOutsideHandler()">
    <p class="test">
      test content
    </p>
    </div>
    <p class="test2">
      click outside target content
    </p>
  `
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
      declarations: [
        SDSClickOutsideDirective,
        TestComponent
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    directive =
      fixture.debugElement
        .query(
          By.directive(SDSClickOutsideDirective)
        )
        .injector.get(SDSClickOutsideDirective);
  });

  it('should compile', () => {
    expect(true).toBe(true);
  });

  it('should check for click outside', () => {
    component.action.subscribe(val => {
      expect(val).toBe(true);
    });
    const el = fixture.debugElement.query(By.css('.test'));
    el.nativeElement.click();

    const el2 = fixture.debugElement.query(By.css('.test2'));
    el2.nativeElement.click();
  });
});
