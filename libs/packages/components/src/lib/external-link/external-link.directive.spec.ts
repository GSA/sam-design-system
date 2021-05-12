import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ExternalLinkDirective } from './external-link.directive';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  template: `
    <a id="test" href="google.com">Google </a>
    <a id="test2" [hideIcon]="true" href="google.com" aria-label="test aria label - opens in a new window">Google </a>
    <a id="test3">Not Google </a>
    <a id="test4" href="{{name}}/settings/test123">Google </a>
    <a id="test5" [hideIcon]="true" href="google.com" aria-label="test aria label with no keywords">Google </a>
    <a id="test6" [hideIcon]="true" href="google.com">Google <span>test element</span></a>
  `
})
class TestComponent {
  constructor() { }
  public name = location.hostname;
}

describe('Sam External Link Directive', () => {
  let directive: ExternalLinkDirective;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  function findIcons() {
    return fixture.debugElement.queryAll(By.css('.usa-link--external'));
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ExternalLinkDirective]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: { entryComponents: [] }
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should create one icon', () => {
    const icons = findIcons();
    expect(icons.length).toEqual(1);
  });

  it('should not create an icon', () => {
    const icons = findIcons();
    expect(icons.length).toEqual(1);
  });

  it ('Should add aria label attribute to external links using inner text if one does not exist', () => {
    const testElementWithoutAriaLabel = fixture.debugElement.query(By.css('#test'));
    expect(testElementWithoutAriaLabel.attributes['aria-label']).toEqual('Open Google in a new window');
  });

  it('Should not update aria label to external link if valid aria label is set', () => {
    const testElementWithoutAriaLabel = fixture.debugElement.query(By.css('#test2'));
    expect(testElementWithoutAriaLabel.attributes['aria-label']).toEqual('test aria label - opens in a new window');
  });

  it('Should not add aria label to internal links', () => {
    const testElementWithoutAriaLabel = fixture.debugElement.query(By.css('#test4'));
    expect(testElementWithoutAriaLabel.attributes['aria-label']).toEqual('');
  });

  it('Should update aria label to external link if existing aria label does not indicate opening in new window', () => {
    const testElementWithoutAriaLabel = fixture.debugElement.query(By.css('#test5'));
    expect(testElementWithoutAriaLabel.nativeElement.getAttribute('aria-label')).toEqual('test aria label with no keywords - opens in a new window');
  });

  it ('Should add aria label attribute to external links using href if one does not exist', () => {
    const testElementWithoutAriaLabel = fixture.debugElement.query(By.css('#test6'));
    expect(testElementWithoutAriaLabel.attributes['aria-label']).toEqual('Open google.com in a new window');
  });
});
