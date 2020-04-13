import { async, TestBed } from '@angular/core/testing';
import { DocumentationModule } from './documentation.module';

describe('DocumentationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocumentationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocumentationModule).toBeDefined();
  });
});
