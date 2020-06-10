import { TestBed, ComponentFixture, async, fakeAsync, flush, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
// Load the implementations that should be tested
import { ExternalLinkDirective } from './external-link.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router, RouterOutlet, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
  template: `
    <a id="test" href="google.com">Google </a>
    <a id="test2" href="./">Not Google </a>
  `
})
class TestComponent {
  constructor() {}
}


describe('Sam External Link Directive', () => {
  let directive: ExternalLinkDirective;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  function findIcons() {
    return fixture.debugElement.queryAll(By.css('.margin-left-2px'));
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
    const cmp = fixture.debugElement.query(By.css('#test'));
    const icons = findIcons();
    console.log(icons);
    expect(icons).toEqual([]);
  });

  it('should not create an icon', () => {
    fixture.detectChanges();
    const cmp = fixture.debugElement.query(By.css('#test2'));
    const icons = findIcons();
    console.log(icons);
    expect(icons.length).toEqual(0);
  });


});

@Component({
  template: ''
})

class MockComponent{

}

@Component({
  template:`
     <a id="test2" routerLink="/settings/{{collName}}/edit/{{item._id}}">link</a>
    <router-outlet></router-outlet>
    `
})

class TestRouterLinkComponent {
  collName = 'testing';
  item = {
    _id: 1
  };
}

fdescribe('Sam External Link Directive', () => {
  let component: TestRouterLinkComponent;
  let fixture: ComponentFixture<TestRouterLinkComponent>;
  let location: Location;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'settings/:collection/edit/:item', component: MockComponent }
        ])
      ],
      providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
      declarations: [TestRouterLinkComponent, MockComponent, ExternalLinkDirective],
    }).compileComponents();


    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(TestRouterLinkComponent);
  }));


  it('should create component', () => {
    expect(component).toBeDefined();
  });


  it('should go to internal link', async((inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TestRouterLinkComponent);
    fixture.detectChanges();
    const cmp = fixture.debugElement.query(By.css('a')).nativeElement.getAttribute('href');
    expect(cmp).toEqual('/settings/testing/edit/1')

  }))));


});

