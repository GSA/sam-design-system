import { async, TestBed } from '@angular/core/testing';
import { PackagesExperimentalModule } from './packages-experimental.module';

describe('PackagesExperimentalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PackagesExperimentalModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PackagesExperimentalModule).toBeDefined();
  });
});
