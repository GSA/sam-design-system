import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject, of } from 'rxjs';
import { SdsDialogModule } from '../dialog/dialog.module';
import { SdsDialogService } from '../dialog/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SdsSideToolbarComponent } from './side-toolbar.component';

@Component({
  selector: 'usa-icon',
  template: '<span class="usa-icon-mock"></span>',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon: string;
  @Input() size: string;
}

@Component({
  template: `
    <sds-side-toolbar
      [responsiveButtonText]="responsiveButtonText"
      [responsiveButtonIcon]="responsiveButtonIcon"
      [dialogTitleText]="dialogTitleText"
      [backButtonAria]="backButtonAria"
      [showApply]="showApply"
      [responsiveSize]="responsiveSize"
      [responsiveDialogOptions]="responsiveDialogOptions"
    >
      <ng-template #toolbarContent>
        <span id="test-content">Toolbar Slotted Content</span>
      </ng-template>
    </sds-side-toolbar>
  `,
  standalone: false,
})
class TestHostComponent {
  @ViewChild(SdsSideToolbarComponent) sideToolbar: SdsSideToolbarComponent;
  responsiveButtonText = 'Filters';
  responsiveButtonIcon = 'sliders';
  dialogTitleText: string;
  backButtonAria: string;
  showApply = false;
  responsiveSize = 480;
  responsiveDialogOptions: any;
}

describe('SideToolbarComponent', () => {
  let component: SdsSideToolbarComponent;
  let fixture: ComponentFixture<SdsSideToolbarComponent>;
  let breakpointSubject: Subject<BreakpointState>;
  let mockBreakpointObserver: { observe: ReturnType<typeof vi.fn> };

  beforeEach(waitForAsync(() => {
    breakpointSubject = new Subject<BreakpointState>();
    mockBreakpointObserver = {
      observe: vi.fn().mockReturnValue(breakpointSubject.asObservable()),
    };

    TestBed.configureTestingModule({
      imports: [SdsDialogModule, NoopAnimationsModule],
      declarations: [SdsSideToolbarComponent, TestHostComponent, UsaIconStubComponent],
      providers: [SdsDialogService, { provide: BreakpointObserver, useValue: mockBreakpointObserver }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSideToolbarComponent);
    component = fixture.componentInstance;
    component.responsiveButtonText = 'Filters';
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize default title and aria text from responsiveButtonText', () => {
    expect(component.dialogTitleText).toBe('Filters');
    expect(component.backButtonAria).toBe('Cancel Filters');
  });

  it('should respect custom dialogTitleText and backButtonAria when provided', () => {
    const customFixture = TestBed.createComponent(SdsSideToolbarComponent);
    const customComp = customFixture.componentInstance;
    customComp.responsiveButtonText = 'Filters';
    customComp.dialogTitleText = 'Custom Title';
    customComp.backButtonAria = 'Go Back';
    customFixture.detectChanges();

    expect(customComp.dialogTitleText).toBe('Custom Title');
    expect(customComp.backButtonAria).toBe('Go Back');
    customComp.ngOnDestroy();
  });

  it('should toggle isResponsiveView and emit responsiveView when breakpoint matches', () => {
    const responsiveSpy = vi.spyOn(component.responsiveView, 'emit');

    breakpointSubject.next({ matches: true, breakpoints: {} });
    expect(component.isResponsiveView).toBe(true);
    expect(responsiveSpy).toHaveBeenCalledWith(true);

    breakpointSubject.next({ matches: false, breakpoints: {} });
    expect(component.isResponsiveView).toBe(false);
    expect(responsiveSpy).toHaveBeenCalledWith(false);
  });

  it('should close open responsive dialog when transitioning from responsive to desktop view', () => {
    component.isResponsiveView = true;
    fixture.detectChanges();

    component.onResponsiveViewButtonClicked();
    const dialogRef = (component as any).openResponsiveDialog;
    expect(dialogRef).toBeDefined();

    const dialogSpy = vi.spyOn(dialogRef, 'close');
    const responsiveDialogSpy = vi.spyOn(component.responsiveDialog, 'emit');

    breakpointSubject.next({ matches: false, breakpoints: {} });

    expect(dialogSpy).toHaveBeenCalled();
    expect((component as any).openResponsiveDialog).toBeUndefined();
    expect(responsiveDialogSpy).toHaveBeenCalledWith(undefined);
  });

  it('should open dialog and emit responsiveDialog when responsive view button is clicked', fakeAsync(() => {
    const emitSpy = vi.spyOn(component.responsiveDialog, 'emit');

    component.responsiveDialogOptions = { ariaLabel: 'Responsive Toolbar Dialog' };
    component.onResponsiveViewButtonClicked();

    expect(emitSpy).toHaveBeenCalled();
    const openDialog = (component as any).openResponsiveDialog;
    expect(openDialog).toBeDefined();

    openDialog.close();
    tick();
    expect((component as any).openResponsiveDialog).toBeUndefined();
  }));

  it('should handle onCancelClicked by closing dialog and emitting onCancel', () => {
    component.onResponsiveViewButtonClicked();
    const openDialog = (component as any).openResponsiveDialog;
    const closeSpy = vi.spyOn(openDialog, 'close');
    const cancelSpy = vi.spyOn(component.onCancel, 'emit');

    component.onCancelClicked();

    expect(closeSpy).toHaveBeenCalled();
    expect((component as any).openResponsiveDialog).toBeUndefined();
    expect(cancelSpy).toHaveBeenCalled();
  });

  it('should handle onApplyClicked by closing dialog and emitting onApply', () => {
    component.onResponsiveViewButtonClicked();
    const openDialog = (component as any).openResponsiveDialog;
    const closeSpy = vi.spyOn(openDialog, 'close');
    const applySpy = vi.spyOn(component.onApply, 'emit');

    component.onApplyClicked();

    expect(closeSpy).toHaveBeenCalled();
    expect((component as any).openResponsiveDialog).toBeUndefined();
    expect(applySpy).toHaveBeenCalled();
  });

  it('should display responsive button with icon in DOM when mobile view is enabled', () => {
    component.responsiveButtonIcon = 'sliders';
    component.isResponsiveView = true;
    fixture.detectChanges();

    const responsiveViewButton = fixture.debugElement.query(By.css('#responsiveViewButton'));
    expect(responsiveViewButton).not.toBeNull();
    expect(responsiveViewButton.nativeElement.textContent.trim()).toContain('Filters');

    const icon = responsiveViewButton.query(By.css('usa-icon'));
    expect(icon).not.toBeNull();
  });

  it('should call onResponsiveViewButtonClicked when button in DOM is clicked', () => {
    component.isResponsiveView = true;
    fixture.detectChanges();

    const clickSpy = vi.spyOn(component, 'onResponsiveViewButtonClicked');
    const responsiveViewButton = fixture.debugElement.query(By.css('#responsiveViewButton'));
    responsiveViewButton.nativeElement.click();

    expect(clickSpy).toHaveBeenCalled();
  });
});
