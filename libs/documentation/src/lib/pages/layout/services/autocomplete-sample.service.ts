/* tslint:disable */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, SDSHiercarchicalServiceResult } from '@gsa-sam/components';
import { map } from 'rxjs/operators';

import { SampleAutocompleteData } from './autocomplete-sample.data';


@Injectable()
export class AutocompleteSampleDataService implements SDSAutocompleteServiceInterface {

    private loadedData;
    constructor() {
        this.loadedData = SampleAutocompleteData;
    }

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let itemIncrease = 25;
        let data = of(this.loadedData);
        let itemsOb: Observable<Object[]>;

        if (searchValue) {
            itemsOb = data.pipe(map(items => items.filter(itm =>
                (itm.name.indexOf(searchValue) !== -1 ||
                    itm.subtext.indexOf(searchValue) !== -1
                ))));
        } else {
            itemsOb = data;
        }

        let items: object[];
        itemsOb.subscribe(
            (result) => {
                items = result;
            }
        );
        let totalItemCount = items.length;

        let maxSectionPosition = currentItems + itemIncrease;
        if (maxSectionPosition > totalItemCount) {
            maxSectionPosition = totalItemCount;
        }
        let selectedtems = items.slice(currentItems, maxSectionPosition);

        let returnItem = {
            items: selectedtems,
            totalItems: totalItemCount
        };
        return of(returnItem);

    }
}
