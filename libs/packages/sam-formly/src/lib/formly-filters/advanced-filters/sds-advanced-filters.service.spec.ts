import { TestBed } from '@angular/core/testing';

import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';

describe('SdsAdvancedFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SdsAdvancedFiltersService = TestBed.get(SdsAdvancedFiltersService);
    expect(service).toBeTruthy();
  });

describe('Initial test', () => {
  it('true is true', () => expect(true).toBe(true));
});
});
