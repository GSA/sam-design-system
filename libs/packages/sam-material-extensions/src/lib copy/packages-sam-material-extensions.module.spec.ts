import { async, TestBed } from '@angular/core/testing';
import { PackagesSamMaterialExtensionsModule } from './packages-sam-material-extensions.module';

describe('PackagesSamMaterialExtensionsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PackagesSamMaterialExtensionsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PackagesSamMaterialExtensionsModule).toBeDefined();
  });
});
