/* tslint:disable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SdsHeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SdsTopBannerComponent } from '@gsa-sam/components';

import { NavigationMode } from '@gsa-sam/components';
import { A11yModule } from '@angular/cdk/a11y';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconModule, allIcons as sdsAllIcons } from '@gsa-sam/ngx-uswds-icons'


describe('SdsHeaderComponent', () => {
  let component: SdsHeaderComponent;
  let fixture: ComponentFixture<SdsHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SdsHeaderComponent, SdsTopBannerComponent],
      imports: [RouterTestingModule, IconModule, A11yModule, NgxBootstrapIconsModule.pick(Object.assign(allIcons, sdsAllIcons))]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsHeaderComponent);
    component = fixture.componentInstance;
    component.model = {
      home: { text: "", logo: "", id: "home", route: '', selected: false, mode: NavigationMode.INTERNAL },
      navigationLinks:
        [{ text: "", selected: false, route: "", children: [{ text: "", selected: false, route: "", children: [], id: "childLink", mode: NavigationMode.INTERNAL }], id: "navLink", mode: NavigationMode.INTERNAL }],
      secondaryLinks: [{ text: "", selected: false, route: "", id: "secNavLink", hasCounter: false, imageClass: '', mode: NavigationMode.INTERNAL }]
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove white space', () => {
    let before = 'T E S T';
    let after = 'TEST';
    expect(component.removeWhiteSpace(before)).toBe(after);
  });

  it('find should be null when model is empty', () => {
    expect(component.find('')).toBe(null);
  });


  it('home find / select /deselect', () => {

    expect(component.find(component.model.home.id)).toBe(component.model.home);

    expect(component.model.home.selected).toBe(false);
    component.select(component.model.home.id);
    expect(component.model.home.selected).toBe(true);
    component.deselect();
    expect(component.model.home.selected).toBe(false);
  });


  it('navigation link find / select /deselect', () => {
    expect(component.find(component.model.navigationLinks[0].id)).toBe(component.model.navigationLinks[0]);
    component.select(component.model.navigationLinks[0].id);
    expect(component.model.navigationLinks[0].selected).toBe(true);
    component.deselect();
    expect(component.model.navigationLinks[0].selected).toBe(false);
  });

  it('secondary navigation link find / select /deselect', () => {
    expect(component.find(component.model.secondaryLinks[0].id)).toBe(component.model.secondaryLinks[0]);

    component.select(component.model.secondaryLinks[0].id);
    expect(component.model.secondaryLinks[0].selected).toBe(true);
    component.deselect();
    expect(component.model.secondaryLinks[0].selected).toBe(false);
  });

  it('navigation link child find / select /deselect', () => {
    expect(component.find(component.model.navigationLinks[0].children[0].id)).toBe(component.model.navigationLinks[0].children[0]);
    component.select(component.model.navigationLinks[0].children[0].id);
    expect(component.model.navigationLinks[0].children[0].selected).toBe(true);
    component.deselect();
    expect(component.model.navigationLinks[0].children[0].selected).toBe(false);
  });

  it('has counter ', () => {
    expect(component.hasCounter()).toBe(false);
    component.model.secondaryLinks[0].hasCounter = true;
    expect(component.hasCounter()).toBe(true);
  });


  it('event click', () => {
    let navItem = { mode: NavigationMode.EVENT, text: 'test', route: '/' };
    spyOn(component.linkEvent, 'emit');
    component.linkClickEvent(navItem);
    expect(component.linkEvent.emit).toHaveBeenCalledWith(navItem);
  });

});
