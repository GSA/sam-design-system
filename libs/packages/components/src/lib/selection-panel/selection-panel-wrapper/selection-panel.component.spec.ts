import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationMode } from '../../common-navigation/common-navigation-model';
import { NavigationLink } from '../../side-navigation/model/side-navigation-model';
import { SelectionPanelModel } from '../model/selection-panel.model';
import { SdsSelectionPanelModule } from '../selection-panel.module';
import { SdsSelectionPanelComponent } from './selection-panel.component';
import { SdsSelectionPanelNavigationModeComponent } from '../navigation-mode/navigation-mode.component';
import { SdsSelectionPanelSelectionModeComponent } from '../selection-mode/selection-mode.component';

describe('SdsSelectionPanelComponent (Wrapper)', () => {
  let fixture: ComponentFixture<SdsSelectionPanelComponent>;
  let component: SdsSelectionPanelComponent;

  const createModel = (selectionMode?: 'SELECTION' | 'NAVIGATION'): SelectionPanelModel => ({
    navigationLinks: [
      {
        text: 'Parent 1',
        id: 'linkp1',
        route: '/parent-1',
        mode: NavigationMode.INTERNAL,
        children: [
          {
            text: 'Child 1',
            id: 'linkc1',
            route: '/child-1',
            mode: NavigationMode.INTERNAL,
          },
        ],
      },
      {
        text: 'Parent 2',
        id: 'linkp2',
        route: '/parent-2',
        mode: NavigationMode.INTERNAL,
      },
    ],
    selectionMode,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SdsSelectionPanelModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SdsSelectionPanelComponent);
    component = fixture.componentInstance;
  });

  it('should create the wrapper component', () => {
    component.model = createModel();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('Default and NAVIGATION mode', () => {
    it('should render navigation mode when selectionMode is undefined', () => {
      component.model = createModel(undefined);
      component.navigateOnClick = false;
      const initialSelection: NavigationLink = component.model.navigationLinks[0];
      component.currentSelection = initialSelection;
      fixture.detectChanges();

      const navModeDebugEl = fixture.debugElement.query(By.directive(SdsSelectionPanelNavigationModeComponent));
      const selModeDebugEl = fixture.debugElement.query(By.directive(SdsSelectionPanelSelectionModeComponent));

      expect(navModeDebugEl).toBeTruthy();
      expect(selModeDebugEl).toBeNull();

      const navModeInstance = navModeDebugEl.componentInstance as SdsSelectionPanelNavigationModeComponent;
      expect(navModeInstance.model).toBe(component.model);
      expect(navModeInstance.navigateOnClick).toBe(false);
      expect(navModeInstance.currentSelection).toBe(initialSelection);
    });

    it('should render navigation mode when selectionMode is NAVIGATION', () => {
      component.model = createModel('NAVIGATION');
      fixture.detectChanges();

      const navModeDebugEl = fixture.debugElement.query(By.directive(SdsSelectionPanelNavigationModeComponent));
      expect(navModeDebugEl).toBeTruthy();
    });

    it('should forward panelSelected event emitted from navigation mode', () => {
      component.model = createModel('NAVIGATION');
      fixture.detectChanges();

      const panelSelectedSpy = vi.spyOn(component.panelSelected, 'emit');
      const navModeDebugEl = fixture.debugElement.query(By.directive(SdsSelectionPanelNavigationModeComponent));
      const navModeInstance = navModeDebugEl.componentInstance as SdsSelectionPanelNavigationModeComponent;

      const targetLink = component.model.navigationLinks[0];
      navModeInstance.panelSelected.emit(targetLink);

      expect(panelSelectedSpy).toHaveBeenCalledWith(targetLink);
    });
  });

  describe('SELECTION mode', () => {
    it('should render selection mode when selectionMode is SELECTION', () => {
      component.model = createModel('SELECTION');
      const initialSelection: NavigationLink = component.model.navigationLinks[1];
      component.currentSelection = initialSelection;
      fixture.detectChanges();

      const navModeDebugEl = fixture.debugElement.query(By.directive(SdsSelectionPanelNavigationModeComponent));
      const selModeDebugEl = fixture.debugElement.query(By.directive(SdsSelectionPanelSelectionModeComponent));

      expect(navModeDebugEl).toBeNull();
      expect(selModeDebugEl).toBeTruthy();

      const selModeInstance = selModeDebugEl.componentInstance as SdsSelectionPanelSelectionModeComponent;
      expect(selModeInstance.model).toBe(component.model);
      expect(selModeInstance.currentSelection).toBe(initialSelection);
    });

    it('should forward panelSelected event emitted from selection mode', () => {
      component.model = createModel('SELECTION');
      fixture.detectChanges();

      const panelSelectedSpy = vi.spyOn(component.panelSelected, 'emit');
      const selModeDebugEl = fixture.debugElement.query(By.directive(SdsSelectionPanelSelectionModeComponent));
      const selModeInstance = selModeDebugEl.componentInstance as SdsSelectionPanelSelectionModeComponent;

      const targetLink = component.model.navigationLinks[1];
      selModeInstance.panelSelected.emit(targetLink);

      expect(panelSelectedSpy).toHaveBeenCalledWith(targetLink);
    });
  });
});
