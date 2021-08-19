import { TestBed, waitForAsync } from '@angular/core/testing';
import { PackagesLayoutsModule } from './packages-layouts.module';

describe('PackagesLayoutsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PackagesLayoutsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PackagesLayoutsModule).toBeDefined();
  });
});
