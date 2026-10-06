import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationMode } from '../../common-navigation/common-navigation-model';
import { NavigationLink } from '../../side-navigation/model/side-navigation-model';
import { SelectionPanelModel } from '../model/selection-panel.model';
import { SdsSelectionPanelNavigationModeComponent } from './navigation-mode.component';

describe('Selection Panel Navigation Mode Component', () => {
  let fixture: ComponentFixture<SdsSelectionPanelNavigationModeComponent>;
  let component: SdsSelectionPanelNavigationModeComponent;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  const createModel = (): SelectionPanelModel => ({
    navigationLinks: [
      {
        text: 'Parent 1',
        id: 'linkp1',
        route: '/parent-1',
        mode: NavigationMode.INTERNAL,
        children: [
          {
            text: 'Child 1 of Parent 1',
            route: '/child-1-1',
            mode: NavigationMode.INTERNAL,
            id: 'linkc1p1',
          },
          {
            text: 'Child 2 of Parent 1',
            route: '/child-2-1',
            mode: NavigationMode.INTERNAL,
            id: 'linkc2p1',
            children: [
              {
                text: 'Grandchild 1 of Child 2 of Parent 1',
                route: '/grandchild-1',
                mode: NavigationMode.INTERNAL,
                id: 'linkgc1c2p1',
                queryParams: { tab: 'details', sort: 'asc' },
              },
            ],
          },
        ],
      },
      {
        text: 'Parent 2 (Disabled)',
        id: 'linkp2',
        route: '/parent-2',
        mode: NavigationMode.INTERNAL,
        disabled: true,
      },
      {
        text: 'Parent 3',
        id: 'linkp3',
        route: '/parent-3',
        mode: NavigationMode.INTERNAL,
      },
    ],
    selectionMode: 'NAVIGATION',
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SdsSelectionPanelNavigationModeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SdsSelectionPanelNavigationModeComponent);
    component = fixture.componentInstance;
    component.model = createModel();
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should include all parent and nested child links from input model', () => {
    component.navigateOnClick = false;
    fixture.detectChanges();

    const liElements = fixture.debugElement.queryAll(By.css('li'));
    // Parent 1, Child 1, Child 2, Grandchild 1, Parent 2, Parent 3 = 6
    expect(liElements.length).toEqual(6);

    const anchorElements = fixture.debugElement.queryAll(By.css('a'));
    expect(anchorElements.length).toEqual(6);
  });

  describe('Hierarchical selection and deselect', () => {
    beforeEach(() => {
      component.navigateOnClick = false;
      fixture.detectChanges();
    });

    it('should select grandchild and all its ancestors hierarchically', () => {
      const parent1 = component.model.navigationLinks[0];
      const child2 = parent1.children![1];
      const grandchild = child2.children![0];

      component.selectPanel(grandchild);
      fixture.detectChanges();

      expect(grandchild.selected).toBe(true);
      expect(child2.selected).toBe(true);
      expect(parent1.selected).toBe(true);
      expect(parent1.children![0].selected).toBe(false);

      const currentLinks = fixture.debugElement.queryAll(By.css('a.usa-current'));
      // parent1, child2, grandchild should all have usa-current
      expect(currentLinks.length).toBe(3);
    });

    it('should deselect previous selection hierarchy when another item is selected', () => {
      const parent1 = component.model.navigationLinks[0];
      const child2 = parent1.children![1];
      const grandchild = child2.children![0];
      const parent3 = component.model.navigationLinks[2];

      component.selectPanel(grandchild);
      expect(grandchild.selected).toBe(true);
      expect(parent1.selected).toBe(true);

      // Select parent 3
      component.selectPanel(parent3);
      fixture.detectChanges();

      expect(grandchild.selected).toBe(false);
      expect(child2.selected).toBe(false);
      expect(parent1.selected).toBe(false);
      expect(parent3.selected).toBe(true);

      const currentLinks = fixture.debugElement.queryAll(By.css('a.usa-current'));
      expect(currentLinks.length).toBe(1);
      expect(currentLinks[0].nativeElement.textContent.trim()).toBe('Parent 3');
    });

    it('should deselect all items when an item not in tree is passed to selectPanel', () => {
      const parent1 = component.model.navigationLinks[0];
      component.selectPanel(parent1);
      expect(parent1.selected).toBe(true);

      const externalItem: NavigationLink = {
        text: 'External',
        route: '/ext',
        id: 'ext',
        mode: NavigationMode.INTERNAL,
      };
      component.selectPanel(externalItem);

      expect(parent1.selected).toBe(false);
      expect(externalItem.selected).toBeUndefined();
    });
  });

  describe('Click interactions and navigateOnClick', () => {
    it('should emit panelSelected and navigate when active item is clicked with navigateOnClick=true', () => {
      component.navigateOnClick = true;
      fixture.detectChanges();

      const navigateSpy = vi.spyOn(router, 'navigateByUrl');
      const panelSelectedSpy = vi.spyOn(component.panelSelected, 'emit');

      const parent3 = component.model.navigationLinks[2];
      const links = fixture.debugElement.queryAll(By.css('a'));
      const parent3Link = links.find((l) => l.nativeElement.textContent.trim() === 'Parent 3')!;

      parent3Link.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(parent3.selected).toBe(true);
      expect(component.currentSelection).toBe(parent3);
      expect(panelSelectedSpy).toHaveBeenCalledWith(parent3);
      expect(navigateSpy).toHaveBeenCalledWith('/parent-3', {
        queryParams: undefined,
        relativeTo: activatedRoute,
      });
    });

    it('should navigate with queryParams when item specifies queryParams', () => {
      component.navigateOnClick = true;
      fixture.detectChanges();

      const navigateSpy = vi.spyOn(router, 'navigateByUrl');
      const grandchild = component.model.navigationLinks[0].children![1].children![0];

      component.onPanelItemClick(grandchild);

      expect(navigateSpy).toHaveBeenCalledWith('/grandchild-1', {
        queryParams: { tab: 'details', sort: 'asc' },
        relativeTo: activatedRoute,
      });
    });

    it('should not navigate when navigateOnClick is false', () => {
      component.navigateOnClick = false;
      fixture.detectChanges();

      const navigateSpy = vi.spyOn(router, 'navigateByUrl');
      const panelSelectedSpy = vi.spyOn(component.panelSelected, 'emit');

      const parent3 = component.model.navigationLinks[2];
      component.onPanelItemClick(parent3);

      expect(navigateSpy).not.toHaveBeenCalled();
      expect(panelSelectedSpy).toHaveBeenCalledWith(parent3);
      expect(parent3.selected).toBe(true);
    });

    it('should not select, navigate, or emit when clicked item is disabled', () => {
      component.navigateOnClick = true;
      fixture.detectChanges();

      const navigateSpy = vi.spyOn(router, 'navigateByUrl');
      const panelSelectedSpy = vi.spyOn(component.panelSelected, 'emit');

      const disabledItem = component.model.navigationLinks[1];
      const disabledLink = fixture.debugElement.query(By.css('a.disabled'));
      expect(disabledLink).toBeTruthy();
      expect(disabledLink.nativeElement.getAttribute('aria-disabled')).toBe('true');
      expect(disabledLink.nativeElement.getAttribute('tabindex')).toBe('-1');

      disabledLink.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(disabledItem.selected).toBeFalsy();
      expect(navigateSpy).not.toHaveBeenCalled();
      expect(panelSelectedSpy).not.toHaveBeenCalled();
    });
  });

  describe('ngOnChanges lifecycle hook', () => {
    it('should select item and navigate on changes.currentSelection when navigateOnClick is true', () => {
      component.navigateOnClick = true;
      fixture.detectChanges();

      const navigateSpy = vi.spyOn(router, 'navigateByUrl');
      const targetItem = component.model.navigationLinks[2];
      component.currentSelection = targetItem;

      component.ngOnChanges({
        currentSelection: new SimpleChange(null, targetItem, false),
      });

      expect(targetItem.selected).toBe(true);
      expect(navigateSpy).toHaveBeenCalledWith('/parent-3', {
        queryParams: undefined,
        relativeTo: activatedRoute,
      });
    });

    it('should select item without navigating on changes.currentSelection when navigateOnClick is false', () => {
      component.navigateOnClick = false;
      fixture.detectChanges();

      const navigateSpy = vi.spyOn(router, 'navigateByUrl');
      const targetItem = component.model.navigationLinks[2];
      component.currentSelection = targetItem;

      component.ngOnChanges({
        currentSelection: new SimpleChange(null, targetItem, false),
      });

      expect(targetItem.selected).toBe(true);
      expect(navigateSpy).not.toHaveBeenCalled();
    });

    it('should do nothing if currentSelection or model is not present in ngOnChanges', () => {
      const navigateSpy = vi.spyOn(router, 'navigateByUrl');
      component.currentSelection = undefined as any;

      component.ngOnChanges({
        navigateOnClick: new SimpleChange(false, true, false),
      });

      expect(navigateSpy).not.toHaveBeenCalled();
    });
  });
});
