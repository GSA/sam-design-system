import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormFieldBasic } from './form-field-basic.component';
import { SdsHeaderModule } from '../../../../../../../packages/components/src/lib/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('HeaderSampleComponent', () => {
  let component: FormFieldBasic;
  let fixture: ComponentFixture<FormFieldBasic>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldBasic],
      imports: [SdsHeaderModule, RouterTestingModule, FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
