import { async, TestBed } from '@angular/core/testing';
import { LayoutSampleModule } from './layout-sample.module';

describe('LayoutSampleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutSampleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LayoutSampleModule).toBeDefined();
  });
});
