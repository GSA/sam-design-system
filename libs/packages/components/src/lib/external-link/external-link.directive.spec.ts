import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ExternalLinkDirective } from './external-link.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  template: `
    <a id="test" href="google.com">Google </a>
    <a id="test2" [hideIcon]="true" href="google.com" aria-label="test aria label">Google </a>
    <a id="test3">Not Google </a>
    <a id="test4" href="{{name}}/settings/test123">Google </a>
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
      declarations: [TestComponent, ExternalLinkDirective, FaIconComponent]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: { entryComponents: [FaIconComponent] }
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should create one icon', () => {
    fixture.detectChanges();
    const icons = findIcons();
    expect(icons.length).toEqual(1);
  });

  it('should not create an icon', () => {
    fixture.detectChanges();
    const icons = findIcons();
    expect(icons.length).toEqual(1);
  });

  it ('Showd add aria label attribute to external links if one does not exist', () => {
    fixture.detectChanges();
    const testElementWithoutAriaLabel = fixture.debugElement.query(By.css('#test'));
    expect(testElementWithoutAriaLabel.attributes['aria-label']).toEqual('Open google.com in a new window');
  });

  it('Should not add aria label to external link if one is already provided', () => {
    fixture.detectChanges();
    const testElementWithoutAriaLabel = fixture.debugElement.query(By.css('#test2'));
    expect(testElementWithoutAriaLabel.attributes['aria-label']).toEqual('test aria label');
  });

  it('Should not add aria label to internal links', () => {
    fixture.detectChanges();
    const testElementWithoutAriaLabel = fixture.debugElement.query(By.css('#test4'));
    expect(testElementWithoutAriaLabel.attributes['aria-label']).toEqual('');
  })
});
