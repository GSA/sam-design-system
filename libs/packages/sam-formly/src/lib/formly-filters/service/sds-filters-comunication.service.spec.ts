import { SDSFormlyUpdateComunicationService } from './sds-filters-comunication.service';
import { fakeAsync } from '@angular/core/testing';

describe('Service: SDSFormlyUpdateComunicationService', () => {
    let service: SDSFormlyUpdateComunicationService;
    beforeEach(() => {
        service = new SDSFormlyUpdateComunicationService();
    });

    it('update filter should propagate', fakeAsync(() => {
        let testData = 'someData'; 
        service.updateFilter(testData);
        service.filterUpdate
            .subscribe(result => {

                expect(result).toBe(testData);
        });

    }));
});
