import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  SDSAutocompleteServiceInterface,
  SDSHiercarchicalServiceResult
} from '@gsa-sam/components';
import { map } from 'rxjs/operators';
import { SampleAutocompleteData } from './autocomplete-sample.data';

@Injectable()
export class AutocompleteSampleDataService
  implements SDSAutocompleteServiceInterface {
  private loadedData;
  constructor() {
    const data = SampleAutocompleteData;
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const results = data.filter(it => it.parentId === item.id);
      item['childCount'] = results.length;
    }
    this.loadedData = data;
  }

  getDataByText(
    currentItems: number,
    searchValue?: string
  ): Observable<SDSHiercarchicalServiceResult> {
    const itemIncrease = 25;
    const data = of(this.loadedData);
    let itemsOb: Observable<Object[]>;
    if (searchValue) {
      itemsOb = data.pipe(
        map(list =>
          list.filter(
            itm =>
              itm.name.indexOf(searchValue) !== -1 ||
              itm.subtext.indexOf(searchValue) !== -1
          )
        )
      );
    } else {
      itemsOb = data;
    }
    let items: object[];
    itemsOb.subscribe(result => {
      items = result;
    });
    const totalItemCount = items.length;
    let maxSectionPosition = currentItems + itemIncrease;
    if (maxSectionPosition > totalItemCount) {
      maxSectionPosition = totalItemCount;
    }
    const selectedtems = items.slice(currentItems, maxSectionPosition);
    const returnItem = {
      items: selectedtems,
      totalItems: totalItemCount
    };
    return of(returnItem);
  }
}
