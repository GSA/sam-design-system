import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSampleComponent } from './header-sample.component';
import { SdsHeaderModule } from '../../../../../packages/components/src/lib/header/header.module';
describe('HeaderSampleComponent', () => {
  let component: HeaderSampleComponent;
  let fixture: ComponentFixture<HeaderSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSampleComponent],
      imports: [SdsHeaderModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
