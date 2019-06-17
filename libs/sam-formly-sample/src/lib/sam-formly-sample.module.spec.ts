import { async, TestBed } from '@angular/core/testing';
import { SamFormlySampleModule } from './sam-formly-sample.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ComponentSampleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SamFormlySampleModule,RouterTestingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SamFormlySampleModule).toBeDefined();
  });
});
