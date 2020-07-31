/* tslint:disable */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  SDSAutocompleteServiceInterface,
  SDSHiercarchicalServiceResult
} from '@gsa-sam/components';
import { map } from 'rxjs/operators';

import { GroupAutocompleteData } from './data';

@Injectable()
export class AutocompleteSampleDataService
  implements SDSAutocompleteServiceInterface {
  private loadedData;
  constructor() {
    const data = GroupAutocompleteData; //SampleAutocompleteData;
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let results = data.filter(it => it.value === item.value);
      item['childCount'] = results.length;
    }
    this.loadedData = data;
  }

  getDataByText(
    currentItems: number,
    searchValue?: string
  ): Observable<SDSHiercarchicalServiceResult> {
    let itemIncrease = 25;
    let data = of(this.loadedData);
    let itemsOb: Observable<Object[]>;

    if (searchValue) {
      const filteredData = [];
      this.loadedData.forEach(item => {
        const elements = item.elements.filter(i =>
          i.value.includes(searchValue)
        );
        if (item.value.includes(searchValue) || elements.length > 0) {
          filteredData.push({ ...item, elements });
        }
      });
      itemsOb = of(filteredData);
    } else {
      itemsOb = data;
    }

    let items: object[];
    itemsOb.subscribe(result => {
      items = result;
    });
    let totalItemCount = items.length;

    let maxSectionPosition = currentItems + itemIncrease;
    if (maxSectionPosition > totalItemCount) {
      maxSectionPosition = totalItemCount;
    }
    let subItemsitems = items.slice(currentItems, maxSectionPosition);

    let returnItem = {
      items: subItemsitems,
      totalItems: totalItemCount
    };
    return of(returnItem);
  }
}
