import { Subject } from 'rxjs';
import { SDSFormlyUpdateComunicationService } from './sds-filters-comunication.service';

import {
    inject,
    tick,
    TestBed,
    getTestBed,
    async,
    fakeAsync,
    ComponentFixture
} from '@angular/core/testing';

describe('Service: SDSFormlyUpdateComunicationService', () => {

    let service: SDSFormlyUpdateComunicationService;
    beforeEach(() => {
        service = new SDSFormlyUpdateComunicationService();
    });

    it('update filter should propagate', fakeAsync(() => {
        let testData = 'someData'; service.filterUpdate
            .subscribe(result => {

                expect(result).toBe(testData);
            });
        service.updateFilter(testData);

    }));
});
