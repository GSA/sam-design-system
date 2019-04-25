import { async, TestBed } from '@angular/core/testing';
import { ComponentSampleModule } from './component-sample.module';

describe('ComponentSampleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentSampleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentSampleModule).toBeDefined();
  });
});
