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
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';


@Component({
  template: `
    <!-- <a id="blank"
      target="_blank">
      Blank
      <span class="fa fa-external-link fa-sm"></span>
    </a> -->

    <a id="test"
    href="google.com"
    >Google </a>
    <!-- <a id="hidden"
      target="hidden"
      hideIcon="true">
      Hidden
    </a>  -->
  `
})
class TestComponent {
  constructor(){}
}

fdescribe('Sam External Link Directive', () => {
  let directive: ExternalLinkDirective;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;


  function findIcons () {

    return fixture.debugElement.queryAll(By.css('.margin-left-2px'));
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ExternalLinkDirective,
        FaIconComponent

      ]
    }).overrideModule(BrowserDynamicTestingModule, { set: {entryComponents: [FaIconComponent]}})
    ;

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  // it('should add external link icon when none is present',
  //   () => {
  //   const cmp =
  //     fixture.debugElement.query(By.css('#named'));

  //   const icons = findIcons(cmp);

  //   expect(icons.length).toBe(icons.length);
  // });

  // it('should not add icon if hideIcon is true', () => {
  //   const cmp =
  //     fixture.debugElement.query(By.css("#hidden"));

  //   const icons = findIcons(cmp);

  //   expect(icons.length).toBe(0);
  // });

  it('should create component', () => {
    expect(component).toBeDefined();
  })


  it('should create one icon', () => {
    fixture.detectChanges();
    const cmp = fixture.debugElement.query(By.css('#test'));
    const icons = findIcons();
    console.log(icons)
    expect(icons.length).toEqual(1);


  })


});
