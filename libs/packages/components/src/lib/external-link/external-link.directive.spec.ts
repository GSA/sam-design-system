import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ExternalLinkDirective } from './external-link.directive';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

@Component({
  template: `
    <a id="test" href="google.com">Google </a>
    <a id="test" [hideIcon]="true" href="google.com">Google </a>
    <a id="test2">Not Google </a>
    <a id="test" href="{{name}}/settings/test123">Google </a>
  `
})
class TestComponent {
  constructor() {}
  public name = location.hostname;
}

describe('Sam External Link Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  function findIcons(deElem) {
    return deElem.queryAll(By.css('fa-icon'));
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FontAwesomeTestingModule],
      declarations: [TestComponent, ExternalLinkDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should create one icon', () => {
    fixture.detectChanges();
    const cmp = fixture.debugElement.query(By.css('#test'));
    const icons = findIcons(cmp);
    expect(icons.length).toEqual(1);
  });

  it('should not create an icon', () => {
    fixture.detectChanges();
    const cmp = fixture.debugElement.query(By.css('#test2'));
    const icons = findIcons(cmp);
    expect(icons.length).toEqual(0);
  });
});
