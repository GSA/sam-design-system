import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterSampleComponent } from './footer-sample.component';
import { SdsFooterModule } from '../../../../../packages/components/src/lib/footer/footer.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('FooterSampleComponent', () => {
  let component: FooterSampleComponent;
  let fixture: ComponentFixture<FooterSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSampleComponent],
      imports: [SdsFooterModule, RouterTestingModule, FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
