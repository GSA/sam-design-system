import {
  TestBed,
  async,
  fakeAsync,
  tick, 
  ComponentFixture} from '@angular/core/testing';

import {
  Component,
  Output,
  ViewChild,
  EventEmitter, 
  DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';

// Load the implementations that should be tested
import {
 ExternalLinkDirective
} from './external-link.directive';


@Component({
  template: `
    <a id="blank"
      target="_blank">
      Blank
      <span class="fa fa-external-link fa-sm"></span>
    </a>

    <a id="named"
      target="name">
      Named
    </a>

    <a id="hidden"
      target="hidden"
      hideIcon="true">
      Hidden
    </a>
  `
})
class TestComponent {}

describe('Sam External Link Directive', () => {
  let directive: ExternalLinkDirective;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  function findIcons (el) {
    return el.queryAll(By.css('.fa-external-link'));
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ExternalLinkDirective
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add external link icon when none is present',
    () => {
    const cmp =
      fixture.debugElement.query(By.css('#named')); 

    const icons = findIcons(cmp);

    expect(icons.length).toBe(icons.length);
  });

  it('should not add icon if hideIcon is true', () => {
    const cmp =
      fixture.debugElement.query(By.css("#hidden"));
    
    const icons = findIcons(cmp);

    expect(icons.length).toBe(0);
  });

});
