import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { SdsMenuModule } from '../menu/menu.module';
import { SdsActionsMenuComponent } from './actions-menu.component';
import { ActionMenuMode, ActionMenuModel } from './action-menu.model';

@Component({
  selector: 'usa-icon',
  template: '<span class="usa-icon-mock"></span>',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon: string;
  @Input() size: string;
}

describe('SdsActionsMenuComponent', () => {
  let component: SdsActionsMenuComponent;
  let fixture: ComponentFixture<SdsActionsMenuComponent>;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  const createModel = (overrides?: Partial<ActionMenuModel>): ActionMenuModel => ({
    trigger: { type: 'plain', shadow: false },
    actions: [
      { id: 'edit', text: 'Edit' },
      { id: 'download', text: 'Download', mode: ActionMenuMode.DISABLED },
      { id: 'delete', text: 'Delete', mode: ActionMenuMode.HIDDEN },
    ],
    ...overrides,
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SdsMenuModule, NoopAnimationsModule],
      declarations: [SdsActionsMenuComponent, UsaIconStubComponent],
    });

    TestBed.overrideModule(SdsMenuModule, {
      remove: { imports: [IconModule, NgxBootstrapIconsModule] },
      add: { declarations: [UsaIconStubComponent], exports: [UsaIconStubComponent] },
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    overlayContainer = TestBed.inject(OverlayContainer);
    overlayContainerElement = overlayContainer.getContainerElement();
    fixture = TestBed.createComponent(SdsActionsMenuComponent);
    component = fixture.componentInstance;
    component.model = createModel();
    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default undefined mode to ActionMenuMode.SHOWN in ngOnInit', () => {
    expect(component.model.actions[0].mode).toBe(ActionMenuMode.SHOWN);
    expect(component.model.actions[1].mode).toBe(ActionMenuMode.DISABLED);
    expect(component.model.actions[2].mode).toBe(ActionMenuMode.HIDDEN);
  });

  it('should handle empty actions array in ngOnInit without error', () => {
    component.model = {
      trigger: { type: 'plain', shadow: false },
      actions: [],
    };
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('getDisabled should return true when called', () => {
    expect(component.getDisabled(ActionMenuMode.DISABLED)).toBe(true);
  });

  it('should render trigger button with default circular class when label is not provided', () => {
    const triggerBtn = fixture.debugElement.query(By.css('button'));
    expect(triggerBtn.nativeElement.classList.contains('sds-button--circular')).toBe(true);
    expect(triggerBtn.nativeElement.textContent).toContain('Toggle Actions');
  });

  it('should render trigger button with label and menu styling when label is provided', () => {
    component.model = createModel({ label: 'Options' });
    fixture.detectChanges();

    const triggerBtn = fixture.debugElement.query(By.css('button'));
    expect(triggerBtn.nativeElement.classList.contains('sds-button--menu')).toBe(true);
    expect(triggerBtn.nativeElement.textContent).toContain('Options');
  });

  it('should apply primary, secondary, shadow, and small size classes according to inputs', () => {
    component.model = {
      trigger: { type: 'primary', shadow: true },
      actions: [],
    };
    component.size = 'sm';
    fixture.detectChanges();

    let triggerBtn = fixture.debugElement.query(By.css('button'));
    expect(triggerBtn.nativeElement.classList.contains('sds-button--primary')).toBe(true);
    expect(triggerBtn.nativeElement.classList.contains('sds-button--shadow')).toBe(true);
    expect(triggerBtn.nativeElement.classList.contains('sds-button--small')).toBe(true);

    component.model = {
      trigger: { type: 'secondary', shadow: false },
      actions: [],
    };
    fixture.detectChanges();
    triggerBtn = fixture.debugElement.query(By.css('button'));
    expect(triggerBtn.nativeElement.classList.contains('sds-button--secondary')).toBe(true);
  });

  it('should respect custom screenReaderText and disabled inputs', () => {
    component.screenReaderText = 'More settings';
    component.disabled = true;
    fixture.detectChanges();

    const triggerBtn = fixture.debugElement.query(By.css('button'));
    expect(triggerBtn.nativeElement.disabled).toBe(true);
    expect(triggerBtn.nativeElement.classList.contains('usa-button--disabled')).toBe(true);
    expect(triggerBtn.nativeElement.textContent).toContain('More settings');
  });

  it('should open menu, render visible/disabled items, hide hidden items, and emit clicks on selection', fakeAsync(() => {
    const clickSpy = vi.spyOn(component.clicks, 'emit');
    const triggerBtn = fixture.debugElement.query(By.css('button'));

    // Open menu
    triggerBtn.nativeElement.click();
    fixture.detectChanges();
    tick(500);

    const allButtons = overlayContainerElement.querySelectorAll('button[sds-menu-item]');
    const actionButtons = Array.from(allButtons).filter(
      (b: any) => b.textContent.trim().length > 0,
    ) as HTMLButtonElement[];
    // 'edit' (SHOWN) and 'download' (DISABLED) should be rendered; 'delete' (HIDDEN) should not
    expect(actionButtons.length).toBe(2);

    const editBtn = actionButtons[0];
    expect(editBtn.textContent.trim()).toBe('Edit');
    expect(editBtn.disabled).toBe(false);

    const downloadBtn = actionButtons[1];
    expect(downloadBtn.textContent.trim()).toBe('Download');
    expect(downloadBtn.disabled).toBe(true);
    expect(downloadBtn.classList.contains('usa-button--disabled')).toBe(true);

    // Clicking enabled item emits action ID
    editBtn.click();
    fixture.detectChanges();
    expect(clickSpy).toHaveBeenCalledWith('edit');
  }));
});
