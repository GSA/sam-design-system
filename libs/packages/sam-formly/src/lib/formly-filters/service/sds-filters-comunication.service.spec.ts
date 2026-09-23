import { SDSFormlyUpdateComunicationService } from './sds-filters-comunication.service';

describe('Service: SDSFormlyUpdateComunicationService', () => {
  let service: SDSFormlyUpdateComunicationService;

  beforeEach(() => {
    service = new SDSFormlyUpdateComunicationService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('update filter should propagate to subscriber', () => {
    const testData = { search: 'testKeyword', status: 'active' };
    let receivedData: any;

    const sub = service.filterUpdate.subscribe((result) => {
      receivedData = result;
    });

    service.updateFilter(testData);
    expect(receivedData).toEqual(testData);
    sub.unsubscribe();
  });

  it('should propagate updates to multiple concurrent subscribers', () => {
    const sub1Values: any[] = [];
    const sub2Values: any[] = [];

    const sub1 = service.filterUpdate.subscribe((val) => sub1Values.push(val));
    const sub2 = service.filterUpdate.subscribe((val) => sub2Values.push(val));

    const testData = { filterId: 'abc-123' };
    service.updateFilter(testData);

    expect(sub1Values).toEqual([testData]);
    expect(sub2Values).toEqual([testData]);

    sub1.unsubscribe();
    sub2.unsubscribe();
  });

  it('should propagate sequential updates in order', () => {
    const receivedValues: any[] = [];
    const sub = service.filterUpdate.subscribe((val) => receivedValues.push(val));

    service.updateFilter({ page: 1 });
    service.updateFilter({ page: 2 });
    service.updateFilter(null);
    service.updateFilter({ page: 3, sort: 'name' });

    expect(receivedValues).toEqual([{ page: 1 }, { page: 2 }, null, { page: 3, sort: 'name' }]);
    sub.unsubscribe();
  });

  it('should not emit past updates to late subscribers (Subject semantics)', () => {
    service.updateFilter('priorData');

    let lateReceived: any = undefined;
    const sub = service.filterUpdate.subscribe((val) => {
      lateReceived = val;
    });

    expect(lateReceived).toBeUndefined();

    service.updateFilter('newData');
    expect(lateReceived).toBe('newData');

    sub.unsubscribe();
  });
});
