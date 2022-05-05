import { SdsToastComponent } from './toast-single.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToastPackage, ToastRef, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule, allIcons as sdsAllIcons } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

describe('Component: SdsToastComponent', () => {
  let component: SdsToastComponent;
  let fixture: ComponentFixture<SdsToastComponent>;
  let toastPackageMock: {
    toastId: number;
    toastType: string;
    afterActivate: jasmine.Spy;
    config: { toastClass: string };
    message: string;
    title: string;
    toastRef: ToastRef<unknown>;
  };

  beforeEach(() => {
    initMockProviders();
    TestBed.configureTestingModule({
      declarations: [SdsToastComponent],
      imports: [
        IconModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        NgxBootstrapIconsModule.pick(Object.assign(allIcons, sdsAllIcons)),
      ],
      providers: [{ provide: ToastPackage, useValue: toastPackageMock }],
    });

    fixture = TestBed.createComponent(SdsToastComponent);
    // /fixture.componentInstance.activateToast();
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

  function initMockProviders(): void {
    toastPackageMock = {
      toastId: 1,
      toastType: 'sds-toast--success',
      afterActivate: jasmine.createSpy('afterActivate'),
      config: { toastClass: 'custom-toast' },
      message: 'test message',
      title: 'test title',
      toastRef: new ToastRef(null),
    };
  }
});
