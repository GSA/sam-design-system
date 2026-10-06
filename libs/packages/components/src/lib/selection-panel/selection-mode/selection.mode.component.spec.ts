import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationMode } from '../../common-navigation/common-navigation-model';
import { SelectionPanelModel } from '../model/selection-panel.model';
import { SdsSelectionPanelSelectionModeComponent } from './selection-mode.component';

describe('Selection Panel Selection Mode Component', () => {
  const createModel = (): SelectionPanelModel => ({
    navigationLinks: [
      {
        text: 'Parent 1',
        id: 'linkp1',
        route: '/',
        mode: NavigationMode.INTERNAL,
        children: [
          { text: 'Child 1 of Parent 1', route: '/', mode: NavigationMode.INTERNAL, id: 'linkc1p1' },
          {
            text: 'Child 2 of Parent 1',
            route: '/',
            mode: NavigationMode.INTERNAL,
            id: 'linkc2p1',
            children: [
              {
                text: 'Grandchild 1 of Child 2 of Parent 1',
                route: '/',
                mode: NavigationMode.INTERNAL,
                id: 'linkgc1c2p1',
              },
            ],
          },
        ],
      },
      {
        text: 'Parent 2',
        id: 'linkp2',
        route: '/parent-2',
        mode: NavigationMode.INTERNAL,
      },
      {
        text: 'Parent 3',
        id: 'linkp3',
        route: '/parent-3',
        mode: NavigationMode.INTERNAL,
      },
    ],
    selectionMode: 'SELECTION',
  });

  let fixture: ComponentFixture<SdsSelectionPanelSelectionModeComponent>;
  let component: SdsSelectionPanelSelectionModeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSelectionPanelSelectionModeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SdsSelectionPanelSelectionModeComponent);
    component = fixture.componentInstance;
    component.model = createModel();
    fixture.detectChanges();
  });

  it('should include only top-level parent links from input model', () => {
    const liElements = fixture.debugElement.queryAll(By.css('li'));
    expect(liElements.length).toEqual(3);

    const anchorTexts = fixture.debugElement.queryAll(By.css('a')).map((a) => a.nativeElement.textContent.trim());
    expect(anchorTexts).toEqual(['Parent 1', 'Parent 2', 'Parent 3']);
  });

  it('should emit event and set currentSelection when panel item is clicked', () => {
    const panelSelectedEventSpy = vi.spyOn(component.panelSelected, 'emit');

    const anchors = fixture.debugElement.queryAll(By.css('a'));
    anchors[1].triggerEventHandler('click', null);
    fixture.detectChanges();

    const expectedItem = component.model.navigationLinks[1];
    expect(component.currentSelection).toBe(expectedItem);
    expect(panelSelectedEventSpy).toHaveBeenCalledWith(expectedItem);

    const currentLi = fixture.debugElement.query(By.css('li.usa-current'));
    expect(currentLi).toBeTruthy();
    expect(currentLi.nativeElement.textContent.trim()).toBe('Parent 2');
  });

  it('should highlight initial currentSelection item with usa-current class', () => {
    component.currentSelection = component.model.navigationLinks[0];
    fixture.detectChanges();

    const liElements = fixture.debugElement.queryAll(By.css('li'));
    expect(liElements[0].nativeElement.classList.contains('usa-current')).toBe(true);
    expect(liElements[1].nativeElement.classList.contains('usa-current')).toBe(false);
    expect(liElements[2].nativeElement.classList.contains('usa-current')).toBe(false);
  });

  it('should not apply usa-current class when currentSelection does not match any id', () => {
    component.currentSelection = {
      text: 'Other',
      id: 'unknown-id',
      route: '/other',
      mode: NavigationMode.INTERNAL,
    };
    fixture.detectChanges();

    const currentLis = fixture.debugElement.queryAll(By.css('li.usa-current'));
    expect(currentLis.length).toBe(0);
  });
});
