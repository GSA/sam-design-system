import { async, TestBed } from '@angular/core/testing';
import { DocumentationModule } from './documentation.module';

describe('DocumentationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocumentationModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(DocumentationModule).toBeDefined();
  });
});
