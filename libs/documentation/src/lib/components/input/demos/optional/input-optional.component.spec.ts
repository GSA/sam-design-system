import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputOptional } from './input-optional.component';
import { SdsHeaderModule } from '../../../../../../../packages/components/src/lib/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('HeaderSampleComponent', () => {
  let component: InputOptional;
  let fixture: ComponentFixture<InputOptional>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputOptional],
      imports: [SdsHeaderModule, RouterTestingModule, FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOptional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
