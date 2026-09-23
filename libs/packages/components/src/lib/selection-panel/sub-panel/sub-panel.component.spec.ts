import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationMode } from '../../common-navigation/common-navigation-model';
import { SelectionPanelModel } from '../model/selection-panel.model';
import { SdsSubPanelComponent } from './sub-panel.component';

describe('Selection Panel Sub Panel Component', () => {
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
    ],
    selectionMode: 'NAVIGATION',
  });

  let fixture: ComponentFixture<SdsSubPanelComponent>;
  let component: SdsSubPanelComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSubPanelComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SdsSubPanelComponent);
    component = fixture.componentInstance;
    component.model = createModel().navigationLinks;
    fixture.detectChanges();
  });

  it('should include four links from hierarchical input model', () => {
    const liElements = fixture.debugElement.queryAll(By.css('li'));
    expect(liElements.length).toEqual(4);

    const sublists = fixture.debugElement.queryAll(By.css('ul.usa-sidenav__sublist'));
    expect(sublists.length).toEqual(2);
  });

  it('should emit event and set currentSelection when top-level item is clicked', () => {
    const subPanelClickedSpy = vi.spyOn(component.subPanelClicked, 'emit');

    const anchorElement = fixture.debugElement.query(By.css('a'));
    anchorElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    const topItem = component.model[0];
    expect(component.currentSelection).toBe(topItem);
    expect(subPanelClickedSpy).toHaveBeenCalledWith(topItem);

    expect(anchorElement.nativeElement.classList.contains('usa-link--active')).toBe(true);
  });

  it('should emit event and set currentSelection when nested child/grandchild item is clicked', () => {
    const subPanelClickedSpy = vi.spyOn(component.subPanelClicked, 'emit');

    const anchors = fixture.debugElement.queryAll(By.css('a'));
    // 0: Parent 1, 1: Child 1, 2: Child 2, 3: Grandchild 1
    const grandchildAnchor = anchors[3];
    expect(grandchildAnchor.nativeElement.textContent.trim()).toBe('Grandchild 1 of Child 2 of Parent 1');

    grandchildAnchor.triggerEventHandler('click', null);
    fixture.detectChanges();

    const grandchildItem = component.model[0].children![1].children![0];
    expect(component.currentSelection).toBe(grandchildItem);
    expect(subPanelClickedSpy).toHaveBeenCalledWith(grandchildItem);

    expect(grandchildAnchor.nativeElement.classList.contains('usa-link--active')).toBe(true);
    expect(anchors[0].nativeElement.classList.contains('usa-link--active')).toBe(false);
  });

  it('should highlight initial currentSelection item with usa-link--active class', () => {
    const child1Item = component.model[0].children![0];
    component.currentSelection = child1Item;
    fixture.detectChanges();

    const activeAnchors = fixture.debugElement.queryAll(By.css('a.usa-link--active'));
    expect(activeAnchors.length).toBe(1);
    expect(activeAnchors[0].nativeElement.textContent.trim()).toBe('Child 1 of Parent 1');
  });

  it('should not apply usa-link--active when currentSelection is null or not found', () => {
    component.currentSelection = undefined as any;
    fixture.detectChanges();

    const activeAnchors = fixture.debugElement.queryAll(By.css('a.usa-link--active'));
    expect(activeAnchors.length).toBe(0);
  });
});
