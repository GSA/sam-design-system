import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'usa-icon',
  template: '',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: any;
}
import { SdsToastComponent } from './toast-single.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DefaultGlobalConfig, ToastPackage, ToastRef, ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: SdsToastComponent', () => {
  let component: SdsToastComponent;
  let fixture: ComponentFixture<SdsToastComponent>;
  let toastPackageMock: ToastPackage;

  beforeEach(() => {
    initMockProviders();
    TestBed.configureTestingModule({
      declarations: [SdsToastComponent, UsaIconStubComponent],
      imports: [CommonModule, ToastrModule.forRoot(), BrowserAnimationsModule],
      providers: [{ provide: ToastPackage, useValue: toastPackageMock }],
    });

    fixture = TestBed.createComponent(SdsToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should get right icon class via method', () => {
    expect(component.getIcon(component.toastPackage.toastType)).toEqual('check2-circle');
  });

  it('should have the right message in the DOM', () => {
    const textWrapper = fixture.debugElement.query(By.css('.sds-toast__content__text')).nativeElement;
    expect(textWrapper.innerHTML).toContain('test message');
  });

  it('renders markup as text by default and as HTML when enabled', () => {
    toastPackageMock.message = '<strong>test message</strong>';
    // Recreate before the computed message signal is first read.
    fixture.destroy();
    fixture = TestBed.createComponent(SdsToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const textWrapper = fixture.nativeElement.querySelector('.sds-toast__content__text');
    expect(textWrapper.textContent).toBe('<strong>test message</strong>');
    expect(textWrapper.querySelector('strong')).toBeNull();

    component.options.update((options) => ({ ...options, enableHtml: true }));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.sds-toast__content__text strong').textContent).toBe('test message');
  });

  it('does not render a message when it is empty', () => {
    toastPackageMock.message = '';
    fixture.destroy();
    fixture = TestBed.createComponent(SdsToastComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.sds-toast__content__text')).toBeNull();
  });

  it('shows the close control only when enabled and removes the toast on click', () => {
    expect(fixture.nativeElement.querySelector('.sds-toast__content__close')).toBeNull();
    component.options.update((options) => ({ ...options, closeButton: true }));
    fixture.detectChanges();
    const remove = vi.spyOn(component, 'remove');
    fixture.nativeElement.querySelector('.sds-toast__content__close').click();
    expect(remove).toHaveBeenCalledTimes(1);
    expect(component.state()).toBe('removed');
    expect(fixture.nativeElement.classList.contains('toast-out')).toBe(true);
  });

  it('preserves the toast package and action event API', () => {
    expect(component.toastPackage).toBe(toastPackageMock);
    const onAction = vi.fn();
    toastPackageMock.onAction().subscribe(onAction);
    const event = new Event('click');
    const stopPropagation = vi.spyOn(event, 'stopPropagation');
    expect(component.action(event)).toBe(false);
    expect(stopPropagation).toHaveBeenCalledOnce();
    expect(onAction).toHaveBeenCalledOnce();
  });

  for (const [type, icon, label] of [
    ['sds-toast--success', 'check2-circle', 'Success'],
    ['sds-toast--info', 'info-circle', 'Info'],
    ['sds-toast--warning', 'exclamation-triangle', 'Warning'],
    ['sds-toast--error', 'slash-circle', 'Error'],
    ['unknown', 'info-circle', 'Info'],
  ]) {
    it(`preserves icon and screen-reader labels for ${type}`, () => {
      expect(component.getIcon(type)).toBe(icon);
      expect(component.getToastSr(type)).toBe(label);
    });
  }

  it('activates with inherited classes and removes after the configured fade duration', () => {
    vi.useFakeTimers();
    try {
      const remove = vi.spyOn(TestBed.inject(ToastrService), 'remove');
      toastPackageMock.toastRef.activate();
      fixture.detectChanges();
      expect(component.state()).toBe('active');
      expect(fixture.nativeElement.style.display).not.toBe('none');
      // This jsdom fixture does not expose animate.enter as a class or attribute;
      // the inherited animation style bindings are observable on the rendered host.
      expect(fixture.nativeElement.style.getPropertyValue('--animation-duration')).toBe(
        `${component.params.easeTime}ms`,
      );
      expect(fixture.nativeElement.style.getPropertyValue('--animation-easing')).toBe(component.params.easing);
      expect(fixture.nativeElement.classList.contains('custom-toast')).toBe(true);
      expect(fixture.nativeElement.classList.contains('sds-toast--success')).toBe(true);
      expect(fixture.nativeElement.querySelector('[role="alert"]').getAttribute('aria-live')).toBe('assertive');
      expect(fixture.nativeElement.querySelector('.usa-sr-only').textContent).toBe('Success');
      component.remove();
      vi.advanceTimersByTime(Number(component.params.easeTime) - 1);
      expect(remove).not.toHaveBeenCalled();
      vi.advanceTimersByTime(1);
      expect(remove).toHaveBeenCalledWith(toastPackageMock.toastId);
    } finally {
      vi.useRealTimers();
    }
  });

  function initMockProviders(): void {
    toastPackageMock = new ToastPackage(
      1,
      { ...DefaultGlobalConfig, toastClass: 'custom-toast', disableTimeOut: true },
      'test message',
      'test title',
      'sds-toast--success',
      new ToastRef(null),
    );
  }
});
