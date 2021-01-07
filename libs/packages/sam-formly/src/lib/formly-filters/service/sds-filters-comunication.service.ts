import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";
@Injectable()
export class SDSFormlyUpdateComunicationService {

    /**
     * Filter update subject
     */
    private updateFilterSource = new Subject<any>();


    /**
     * Observable to subscribe to for get updates of the filter
     */
    filterUpdate = this.updateFilterSource.asObservable();

    /**
     * Update the filter
     * @param filterData
     */
    updateFilter(filterData: any) {
        this.updateFilterSource.next(filterData);
    }

}