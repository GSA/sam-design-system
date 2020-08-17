import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsDownloadModalComponent } from './download-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SdsDialogService, SdsDialogRef } from '@gsa-sam/components';

describe('SdsDownloadModalComponent', () => {
  let component: SdsDownloadModalComponent;
  let fixture: ComponentFixture<SdsDownloadModalComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsDownloadModalComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        SdsDialogService,
        {
          provide: SdsDialogRef,
          useValue: mockDialogRef
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsDownloadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    const fixture = TestBed.createComponent(SdsDownloadModalComponent);
    const component = fixture.componentInstance;
    spyOn(component.onFormGroupChange, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.usa-submit');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onFormGroupChange.emit).toHaveBeenCalled();
  });

  it('should emit on click', () => {
    const fixture = TestBed.createComponent(SdsDownloadModalComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'cancel');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.usa-cancel');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.cancel).toHaveBeenCalledWith();
  });

  it('should click submit', async(() => {
    spyOn(component, 'onSubmit');

    let button = fixture.debugElement.nativeElement.querySelector(
      '.usa-submit'
    );
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  }));

  it('should click cancel', async(() => {
    spyOn(component, 'cancel');

    let button = fixture.debugElement.nativeElement.querySelector(
      '.usa-cancel'
    );
    button.click();

    fixture.whenStable().then(() => {
      expect(component.cancel).toHaveBeenCalled();
    });
  }));

  it('should emit value', () => {
    const fixture = TestBed.createComponent(SdsDownloadModalComponent);
    const component = fixture.componentInstance;
    spyOn(component.onFormGroupChange, 'emit');
    expect(component.onFormGroupChange.emit).not.toHaveBeenCalled();
  });
});
