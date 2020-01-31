import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderBasic } from './header-basic.component';
import { SdsHeaderModule } from '../../../../../../../packages/components/src/lib/header/header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('HeaderSampleComponent', () => {
  let component: HeaderBasic;
  let fixture: ComponentFixture<HeaderBasic>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBasic],
      imports: [SdsHeaderModule, RouterTestingModule, FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
