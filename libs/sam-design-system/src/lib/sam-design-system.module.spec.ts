import { async, TestBed } from '@angular/core/testing';
import { SamDesignSystemModule } from './sam-design-system.module';

describe('SamDesignSystemModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SamDesignSystemModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SamDesignSystemModule).toBeDefined();
  });
});
