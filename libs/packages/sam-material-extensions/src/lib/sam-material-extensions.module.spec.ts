import { waitForAsync, TestBed } from '@angular/core/testing';
import { SamMaterialExtensionsModule } from './sam-material-extensions.module';

describe('DocumentationModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SamMaterialExtensionsModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SamMaterialExtensionsModule).toBeDefined();
  });
});
