import { fakeAsync, tick } from '@angular/core/testing';
import { SDSFormlyUpdateModelService } from './sds-filter-model-update.service';

describe('SDSFormlyUpdateModelService', () => {
  let service: SDSFormlyUpdateModelService;

  beforeEach(() => {
    service = new SDSFormlyUpdateModelService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial value of null on filterModel', () => {
    let initialValue: any = 'not-called';
    const sub = service.filterModel.subscribe((val) => {
      initialValue = val;
    });
    expect(initialValue).toBeNull();
    sub.unsubscribe();
  });

  it('should emit updated filter data to existing subscribers', () => {
    const emittedValues: any[] = [];
    const sub = service.filterModel.subscribe((val) => {
      emittedValues.push(val);
    });

    const testFilter = { keyword: 'contracts', status: 'active' };
    service.updateModel(testFilter);

    expect(emittedValues).toEqual([null, testFilter]);
    sub.unsubscribe();
  });

  it('should provide the latest emitted value to late subscribers', () => {
    const testFilter = { agency: 'GSA', naicsCode: '541512' };
    service.updateModel(testFilter);

    let lateSubscriberValue: any;
    const sub = service.filterModel.subscribe((val) => {
      lateSubscriberValue = val;
    });

    expect(lateSubscriberValue).toEqual(testFilter);
    sub.unsubscribe();
  });

  it('should handle sequential updates in order', () => {
    const emittedValues: any[] = [];
    const sub = service.filterModel.subscribe((val) => {
      emittedValues.push(val);
    });

    service.updateModel({ step: 1 });
    service.updateModel({ step: 2 });
    service.updateModel(null);
    service.updateModel({ step: 3 });

    expect(emittedValues).toEqual([null, { step: 1 }, { step: 2 }, null, { step: 3 }]);
    sub.unsubscribe();
  });

  it('should support multiple concurrent subscribers', () => {
    const sub1Values: any[] = [];
    const sub2Values: any[] = [];

    const sub1 = service.filterModel.subscribe((val) => sub1Values.push(val));
    const sub2 = service.filterModel.subscribe((val) => sub2Values.push(val));

    const testData = { search: 'test query' };
    service.updateModel(testData);

    expect(sub1Values).toEqual([null, testData]);
    expect(sub2Values).toEqual([null, testData]);

    sub1.unsubscribe();
    sub2.unsubscribe();
  });
});
