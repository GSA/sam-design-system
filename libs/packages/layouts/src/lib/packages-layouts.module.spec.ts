import { async, TestBed } from '@angular/core/testing';
import { PackagesLayoutsModule } from './packages-layouts.module';

describe('PackagesLayoutsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PackagesLayoutsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PackagesLayoutsModule).toBeDefined();
  });
});
