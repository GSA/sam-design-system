/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsSideNavigationComponent } from './side-navigation.component';
import { SdsAccordionModule } from '../accordion/accordion.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavigationModel, NavigationLink } from './model/side-navigation-model';
import { NavigationMode } from '../common-navigation/common-navigation-model';
describe('SdsSideNavigationComponent', () => {
  let component: SdsSideNavigationComponent;
  let fixture: ComponentFixture<SdsSideNavigationComponent>;

  let model: SideNavigationModel = {
    navigationLinks: [{
      text: 'Parent 1', id: 'linkp1', route: '/', mode: NavigationMode.INTERNAL, children: [
        { text: 'Child 1 of Parent 1', route: '/', mode: NavigationMode.INTERNAL, id: 'linkc1p1' },
        {
          text: 'Child 2 of Parent 1', route: '/', mode: NavigationMode.INTERNAL, id: 'linkc2p1'
          , children: [
            { text: 'Grandchild 1 of Child 2 of Parent 1', route: '/', mode: NavigationMode.INTERNAL, id: 'linkgc1c2p1' }
          ]
        }
      ]
    }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSideNavigationComponent],
      imports: [RouterTestingModule, SdsAccordionModule, BrowserAnimationsModule]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSideNavigationComponent);
    component = fixture.componentInstance;
    component.model = model;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Select and deselect Item: Top Parent', () => {
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeFalsy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeFalsy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
    //Make Selection
    component.select(component.model.navigationLinks[0].id);
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeTruthy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeFalsy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
    component.deselect();
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeFalsy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeFalsy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
  });

  it('Select and deselect Item: First child with no children', () => {
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeFalsy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeFalsy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
    //Make Selection
    component.select(component.model.navigationLinks[0].children[0].id);
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeTruthy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeTruthy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeFalsy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
    component.deselect();
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeFalsy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeFalsy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
  });


  it('Select and deselect Item: Second child with  children', () => {
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeFalsy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeFalsy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
    //Make Selection
    component.select(component.model.navigationLinks[0].children[1].id);
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeTruthy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeTruthy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
    component.deselect();
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeFalsy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeFalsy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
  });



  it('Select and deselect Item: Grandchild', () => {
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeFalsy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeFalsy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
    //Make Selection
    component.select(component.model.navigationLinks[0].children[1].children[0].id);
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeTruthy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeTruthy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeTruthy();
    component.deselect();
    //Parent
    expect(component.model.navigationLinks[0].selected).toBeFalsy();
    //Child 1
    expect(component.model.navigationLinks[0].children[0].selected).toBeFalsy();
    //Child 2
    expect(component.model.navigationLinks[0].children[1].selected).toBeFalsy();
    //GrandChild
    expect(component.model.navigationLinks[0].children[1].children[0].selected).toBeFalsy();
  });

  it('event click', () => {
    let navItem = { mode: NavigationMode.EVENT, text: 'test', route: '/' };
    spyOn(component.linkEvent, 'emit');
    component.linkClickEvent(navItem);
    expect(component.linkEvent.emit).toHaveBeenCalledWith(navItem);
  });

  it('correct template', () => {
    let link = new NavigationLink();
    expect(component.getItemTemplate(link)).toBe(null);
    link.mode = NavigationMode.EVENT;
    expect(component.getItemTemplate(link)).not.toBeNull();
    link.mode = NavigationMode.EXTERNAL;
    expect(component.getItemTemplate(link)).not.toBeNull();
    link.mode = NavigationMode.INTERNAL;
    expect(component.getItemTemplate(link)).not.toBeNull();
    link.mode = NavigationMode.LABEL;
    expect(component.getItemTemplate(link)).not.toBeNull();

  });

  it('url builder', () => {
    let link = new NavigationLink();
    link.route = 'test';
    expect(component.urlBuilder(link)).toBe(link.route);
    link.queryParams = { 'item': '1' };
    expect(component.urlBuilder(link)).toBe(link.route + '?item=1');
    link.queryParams = { 'item': '1', 'item2': '2' };
    expect(component.urlBuilder(link)).toBe(link.route + '?item=1&item2=2');
    link.route = 'test?';
    link.queryParams = { 'item': '1', 'item2': '2', 'item3': '3' };
    expect(component.urlBuilder(link)).toBe(link.route + 'item=1&item2=2&item3=3');
    link.route = 'test?x=r';
    expect(component.urlBuilder(link)).toBe(link.route + '&item=1&item2=2&item3=3');
    link.route = 'test';
    link.queryParams = { 'item space': '1 space' };
    expect(component.urlBuilder(link)).toBe(link.route + '?item%20space=1%20space');
  });


});

