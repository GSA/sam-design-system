import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { NgbRTL } from './rtl';

describe('NgbRTL service', () => {
  let doc: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    doc = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    doc.documentElement.removeAttribute('dir');
  });

  it('should return false when dir attribute is not set or ltr', () => {
    doc.documentElement.removeAttribute('dir');
    const rtl = TestBed.inject(NgbRTL);
    expect(rtl.isRTL()).toBe(false);

    doc.documentElement.setAttribute('dir', 'ltr');
    expect(rtl.isRTL()).toBe(false);
  });

  it('should return true when dir attribute is rtl (case-insensitive)', () => {
    doc.documentElement.setAttribute('dir', 'rtl');
    const rtl = TestBed.inject(NgbRTL);
    expect(rtl.isRTL()).toBe(true);

    doc.documentElement.setAttribute('dir', 'RTL');
    expect(rtl.isRTL()).toBe(true);
  });
});
