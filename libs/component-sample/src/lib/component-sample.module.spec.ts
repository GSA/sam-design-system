import { async, TestBed } from '@angular/core/testing';
import { ComponentSampleModule } from './component-sample.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ComponentSampleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentSampleModule,RouterTestingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentSampleModule).toBeDefined();
  });
});
