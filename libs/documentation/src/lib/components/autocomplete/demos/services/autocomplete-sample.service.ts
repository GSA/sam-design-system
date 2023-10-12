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
    const data: (typeof SampleAutocompleteData[0] & { index?: number })[] = SampleAutocompleteData; // Here we extend the type with index
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      item.index = i; // assign the original index
      let results = data.filter((it) => it.parentId === item.id);
      item['childCount'] = results.length;
    }
    this.loadedData = data;
  }

  getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
    let itemIncrease = 25;
    let data = of(this.loadedData);
    let itemsOb: Observable<Object[]>;

    if (searchValue) {
      itemsOb = data.pipe(
        map((items) =>
          items.filter((itm) => itm.name.indexOf(searchValue) !== -1 || itm.subtext.indexOf(searchValue) !== -1)
        )
      );
    } else {
      itemsOb = data;
    }

    let items: object[];
    itemsOb.subscribe((result) => {
      items = result;
    });

    items.sort((a: any, b: any) => {
      if (a.checked && !b.checked) {
        return -1;
      }
      if (!a.checked && b.checked) {
        return 1;
      }
      // if neither a nor b are checked, or both are checked, sort based on original index
      return (a.index || 0) - (b.index || 0);
    });

    let totalItemCount = items.length;

    let maxSectionPosition = currentItems + itemIncrease;
    if (maxSectionPosition > totalItemCount) {
      maxSectionPosition = totalItemCount;
    }
    let subItemsitems = items.slice(currentItems, maxSectionPosition);

    let returnItem = {
      items: subItemsitems,
      totalItems: totalItemCount,
    };
    return of(returnItem);
  }
}
