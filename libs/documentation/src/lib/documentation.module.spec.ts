import { TestBed, waitForAsync } from '@angular/core/testing';
import { DocumentationModule } from './documentation.module';

describe('DocumentationModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [DocumentationModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(DocumentationModule).toBeDefined();
  });
});
