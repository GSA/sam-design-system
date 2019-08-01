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
        let testData = 'someData';
        // const spy = spyOn(dataStub, 'get').and.returnValue(
        //     Observable.of(testData)
        //   );
        service.updateFilter(testData);

    }));
});
// export class SDSFormlyUpdateComunicationService {

//     /**
//      * Filter update subject
//      */
//     private updateFilterSource = new Subject<any>();


//     /**
//      * Observable to subscribe to for get updates of the filter
//      */
//     filterUpdate = this.updateFilterSource.asObservable();

//     /**
//      * Update the filter
//      * @param filterData
//      */
//     updateFilter(filterData: any) {
//         this.updateFilterSource.next(filterData);
//     }

// }