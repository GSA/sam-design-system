import { async, TestBed } from '@angular/core/testing';
import { ExperimentalModule } from './experimental.module';

describe('ExperimentalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExperimentalModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExperimentalModule).toBeDefined();
  });
});
