import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  SdsDialogRef,
  SDS_DIALOG_DATA,
  SdsDialogService
} from '@gsa-sam/components';

import { SdsFormlyModalComponent } from './formly-modal.component';
import { SdsFormlyModule } from '../formly/formly.module';
import { SdsAdvancedFiltersService } from '../formly-filters/advanced-filters/sds-advanced-filters.service';

describe('SdsFormlyDialogComponent', () => {
  let component: SdsFormlyModalComponent;
  let fixture: ComponentFixture<SdsFormlyModalComponent>;
  let dialogRef: SdsDialogService;
  let advancedFiltersService: SdsAdvancedFiltersService;

  beforeEach(async(() => {
    const advancedFiltersServiceSpy = jasmine.createSpyObj(
      'SdsAdvancedFiltersService',
      ['updateFields']
    );
    const dialogSpy = jasmine.createSpyObj('SdsDialogRef', ['close']);
    TestBed.configureTestingModule({
      declarations: [SdsFormlyModalComponent],
      imports: [
        CommonModule,
        FormlyModule,
        SdsFormlyModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: SDS_DIALOG_DATA, useValue: {} },
        { provide: SdsDialogRef, useValue: dialogSpy },
        {
          provide: SdsAdvancedFiltersService,
          useValue: advancedFiltersServiceSpy
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsFormlyModalComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.get(SdsDialogRef);
    advancedFiltersService = TestBed.get(SdsAdvancedFiltersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inherit form, model, options, cancel and submit from data if available', () => {
    const initForm: FormGroup = new FormGroup({
      testControl: new FormControl('')
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
          disabled: true
        }
      },
      submit: 'Save'
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
      originalModel: []
    };

    component.data = initData;
    component.ngOnInit();

    const form = new FormGroup({});
    expect(component.form.getRawValue()).toEqual(form.getRawValue());
    expect(component.model).toEqual({});
    expect(component.options).toEqual({});
    expect(component.submit).toEqual('Submit');
    expect(component.cancel).toEqual('Cancel');
  });

  it('should call onCancel() when Cancel button is clicked', async(() => {
    spyOn(component, 'onCancel');
    const closeBtn: HTMLElement = fixture.nativeElement.querySelector(
      '.usa-button[type="button"]'
    );
    closeBtn.click();
    expect(component.onCancel).toHaveBeenCalled();
  }));

  it('should call onSubmit() when Submit button is clicked', async(() => {
    spyOn(component, 'onSubmit');
    const submitBtn: HTMLElement = fixture.nativeElement.querySelector(
      '.usa-button[type="submit"]'
    );
    submitBtn.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  it('should close when cancel button is clicked', () => {
    const closeBtn: HTMLElement = fixture.nativeElement.querySelector(
      '.usa-button[type="button"]'
    );
    closeBtn.click();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });

  it('should close with results when form is valid submit button is clicked', () => {
    const submitBtn: HTMLElement = fixture.nativeElement.querySelector(
      '.usa-button[type="submit"]'
    );
    submitBtn.click();
    expect(advancedFiltersService.updateFields).toHaveBeenCalled();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });

  it('should not close when form is invalid and submit button is clicked', () => {
    component.form.setErrors({ invalid: true });
    const submitBtn: HTMLElement = fixture.nativeElement.querySelector(
      '.usa-button[type="submit"]'
    );
    submitBtn.click();
    expect(advancedFiltersService.updateFields).toHaveBeenCalledTimes(0);
    expect(component.dialogRef.close).toHaveBeenCalledTimes(0);
  });
});
