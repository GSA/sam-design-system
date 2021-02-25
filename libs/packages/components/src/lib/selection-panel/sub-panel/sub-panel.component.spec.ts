

import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { NavigationMode } from "../../common-navigation/common-navigation-model";
import { SelectionPanelModel } from "../model/selection-panel.model";
import { SdsSubPanelComponent } from './sub-panel.component';

describe('Selection Panel Sub Panel Component', () => {

  let model: SelectionPanelModel = {
    navigationLinks: [
      {
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
    ],
    selectionMode: 'NAVIGATION'
  };

  let fixture: ComponentFixture<SdsSubPanelComponent>;
  let component: SdsSubPanelComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SdsSubPanelComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(SdsSubPanelComponent);
    component = fixture.componentInstance;
    component.model = model.navigationLinks;
    fixture.detectChanges();
  });

  it('Should include four link from input model', () => {
    const liElements = fixture.debugElement.queryAll(By.css('li'));
    expect(liElements.length).toEqual(4);
  });

  it('Should emit event when panel item is clicked', () => {
    const panelSelectedEventSpy = spyOn(component.subPanelClicked, 'emit');

    const anchorElement = fixture.debugElement.query(By.css('a'));
    anchorElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(panelSelectedEventSpy).toHaveBeenCalled();
  })
})