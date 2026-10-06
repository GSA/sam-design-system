import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { UntypedFormGroup, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsDialogModule, SdsDialogRef, SdsDialogService, SDS_DIALOG_DATA } from '@gsa-sam/components';

import { SdsFormlyDialogComponent } from './formly-dialog.component';
import { SdsFormlyDialogModule } from './sds-formly-dialog.module';
import { SdsFormlyModule } from '../formly/formly.module';
import { SdsAdvancedFiltersService } from '../formly-filters/advanced-filters/sds-advanced-filters.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';

describe('SdsFormlyDialogComponent', () => {
  let component: SdsFormlyDialogComponent;
  let fixture: ComponentFixture<SdsFormlyDialogComponent>;
  let dialogRef: SdsDialogRef<any>;
  let advancedFiltersService: SdsAdvancedFiltersService;

  beforeEach(waitForAsync(() => {
    const advancedFiltersServiceSpy = { updateFields: vi.fn() };
    const dialogSpy = { close: vi.fn() };
    TestBed.configureTestingModule({
      declarations: [SdsFormlyDialogComponent],
      imports: [CommonModule, FormlyModule, SdsFormlyModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        { provide: SDS_DIALOG_DATA, useValue: {} },
        { provide: SdsDialogRef, useValue: dialogSpy },
        {
          provide: SdsAdvancedFiltersService,
          useValue: advancedFiltersServiceSpy,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsFormlyDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(SdsDialogRef);
    advancedFiltersService = TestBed.inject(SdsAdvancedFiltersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inherit form, model, options, cancel and submit from data if available', () => {
    const initForm: UntypedFormGroup = new UntypedFormGroup({
      testControl: new UntypedFormControl(''),
    });
    const initModel = { testControl: '' };
    const initData = {
      fields: [],
      originalFields: [],
      originalModel: [],
      cancel: 'Reset',
      form: initForm,
      model: initModel,
      options: {
        formState: {
          disabled: true,
        },
      },
      submit: 'Save',
    };

    component.data = initData;
    component.ngOnInit();

    expect(component.form).toEqual(initForm);
    expect(component.model).toEqual(initModel);
    expect(component.options).toEqual(initData.options);
    expect(component.submit).toEqual(initData.submit);
    expect(component.cancel).toEqual(initData.cancel);
  });

  it("should have default values for form, model, options, cancel and submit if values aren't provided in this.data", () => {
    const initData = {
      fields: [],
      originalFields: [],
      originalModel: [],
      isAdvanceFilter: true,
    };

    component.data = initData;
    component.ngOnInit();

    const form = new UntypedFormGroup({});
    expect(component.form.getRawValue()).toEqual(form.getRawValue());
    expect(component.model).toEqual({});
    expect(component.options).toEqual({});
    expect(component.submit).toEqual('Submit');
    expect(component.cancel).toEqual('Cancel');
  });

  it('should call onCancel() when Cancel button is clicked', waitForAsync(() => {
    vi.spyOn(component, 'onCancel');
    const closeBtn: HTMLElement = fixture.nativeElement.querySelector('.usa-button[type="button"]');
    closeBtn.click();
    expect(component.onCancel).toHaveBeenCalled();
  }));

  it('should call onSubmit() when Submit button is clicked', waitForAsync(() => {
    vi.spyOn(component, 'onSubmit');
    const submitBtn: HTMLElement = fixture.nativeElement.querySelector('.usa-button[type="submit"]');
    submitBtn.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  it('should not close when form is invalid and submit button is clicked', () => {
    component.form.setErrors({ invalid: true });
    const submitBtn: HTMLElement = fixture.nativeElement.querySelector('.usa-button[type="submit"]');
    submitBtn.click();
    expect(advancedFiltersService.updateFields).toHaveBeenCalledTimes(0);
  });

  it('should emit submitFn with current model when onSubmit is called', () => {
    const emitSpy = vi.spyOn(component.submitFn, 'emit');
    component.model = { keyword: 'search term' };

    component.onSubmit();

    expect(emitSpy).toHaveBeenCalledWith({ keyword: 'search term' });
  });

  it('should reset model and emit cancelFn when onCancel is called', () => {
    const resetSpy = vi.fn();
    component.options = { resetModel: resetSpy } as any;
    const emitSpy = vi.spyOn(component.cancelFn, 'emit');
    component.model = { keyword: 'search term' };

    component.onCancel();

    expect(resetSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith({ keyword: 'search term' });
  });

  it('should emit onChangeFn with current model when onModelChange is called', () => {
    const emitSpy = vi.spyOn(component.onChangeFn, 'emit');
    component.model = { updatedField: 'newValue' };

    component.onModelChange();

    expect(emitSpy).toHaveBeenCalledWith({ updatedField: 'newValue' });
  });

  it('should disable submit button when disableSubmitButtonEnabled is true in data', () => {
    component.data = {
      fields: [],
      disableSubmitButtonEnabled: true,
    };
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.disableSubmitButton).toBe(true);
    const submitBtn: HTMLButtonElement = fixture.nativeElement.querySelector('.usa-button[type="submit"]');
    expect(submitBtn.disabled).toBe(true);
  });

  it('should enable submit button when disableSubmitButtonEnabled is false or omitted', () => {
    component.data = {
      fields: [],
      disableSubmitButtonEnabled: false,
    };
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.disableSubmitButton).toBe(false);
    const submitBtn: HTMLButtonElement = fixture.nativeElement.querySelector('.usa-button[type="submit"]');
    expect(submitBtn.disabled).toBe(false);
  });

  it('should render title and subtitle when provided in data', () => {
    component.data = {
      fields: [],
      title: 'Filter Options',
      subtitle: 'Select criteria to narrow results',
    };
    component.ngOnInit();
    fixture.detectChanges();

    const titleEl = fixture.nativeElement.querySelector('[sds-dialog-title]');
    const subtitleEl = fixture.nativeElement.querySelector('[sds-dialog-subtitle]');

    expect(titleEl).toBeTruthy();
    expect(titleEl.textContent.trim()).toEqual('Filter Options');
    expect(subtitleEl).toBeTruthy();
    expect(subtitleEl.textContent.trim()).toEqual('Select criteria to narrow results');
  });

  it('should not render title and subtitle when omitted in data', () => {
    component.data = {
      fields: [],
    };
    component.ngOnInit();
    fixture.detectChanges();

    const titleEl = fixture.nativeElement.querySelector('[sds-dialog-title]');
    const subtitleEl = fixture.nativeElement.querySelector('[sds-dialog-subtitle]');

    expect(titleEl).toBeNull();
    expect(subtitleEl).toBeNull();
  });

  it('should instantiate SdsFormlyDialogModule', () => {
    const module = new SdsFormlyDialogModule();
    expect(module).toBeTruthy();
  });
});

describe('SdsFormlyDialogComponent modal service interactions', () => {
  let dialogService: SdsDialogService;
  let overlayContainer: OverlayContainer;

  beforeEach(waitForAsync(() => {
    const advancedFiltersServiceSpy = { updateFields: vi.fn() };
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        SdsFormlyModule,
        SdsDialogModule,
        SdsFormlyDialogModule,
      ],
      providers: [
        {
          provide: SdsAdvancedFiltersService,
          useValue: advancedFiltersServiceSpy,
        },
      ],
    }).compileComponents();

    dialogService = TestBed.inject(SdsDialogService);
    overlayContainer = TestBed.inject(OverlayContainer);
  }));

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should open dialog modal via SdsDialogService and emit submitFn on submit', () => {
    const dialogRef = dialogService.open(SdsFormlyDialogComponent, {
      data: {
        title: 'Modal Header',
        subtitle: 'Modal Subtitle',
        submit: 'Apply',
        cancel: 'Dismiss',
        fields: [],
        model: { status: 'active' },
      },
    });

    const dialogComp = dialogRef.componentInstance;
    expect(dialogComp).toBeTruthy();
    dialogComp.ngOnInit();
    expect(dialogComp.submit).toEqual('Apply');
    expect(dialogComp.cancel).toEqual('Dismiss');

    let submittedData: any = null;
    dialogComp.submitFn.subscribe((val) => {
      submittedData = val;
    });

    dialogComp.onSubmit();
    expect(submittedData).toEqual({ status: 'active' });

    dialogRef.close();
  });

  it('should open dialog modal and reset options and emit cancelFn on cancel', () => {
    const resetSpy = vi.fn();
    const dialogRef = dialogService.open(SdsFormlyDialogComponent, {
      data: {
        fields: [],
        model: { query: 'test query' },
        options: { resetModel: resetSpy } as any,
      },
    });

    const dialogComp = dialogRef.componentInstance;
    dialogComp.ngOnInit();
    let canceledData: any = null;
    dialogComp.cancelFn.subscribe((val) => {
      canceledData = val;
    });

    dialogComp.onCancel();
    expect(resetSpy).toHaveBeenCalledTimes(1);
    expect(canceledData).toEqual({ query: 'test query' });

    dialogRef.close();
  });
});
