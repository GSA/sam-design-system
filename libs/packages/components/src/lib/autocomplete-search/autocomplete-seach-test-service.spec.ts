/* tslint:disable */
import { Observable, of } from 'rxjs';
import {
  SDSAutocompleteServiceInterface,
  SDSHiercarchicalServiceResult,
} from './models/SDSAutocompleteServiceInterface';
import { map } from 'rxjs/operators';
import { GropupSampleAutocompleteData } from './autocomplete-sample.data';

export class AutoCompleteSampleDataService
  implements SDSAutocompleteServiceInterface {
  private loadedData;
  constructor() {
    const data = GropupSampleAutocompleteData;
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let results = data.filter((it) => it.element_id === item.element_id);
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
      this.loadedData.forEach((item) => {
        const elements = item.elements.filter((i) =>
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
    let items: object[] = this.itemsListOutofObservable(itemsOb);
    let totalItemCount = items.length;

    let maxSectionPosition = this.getMaxSectionPosition(
      currentItems,
      itemIncrease,
      totalItemCount
    );
    let subItemsitems = items.slice(currentItems, maxSectionPosition);

    let returnItem = {
      items: subItemsitems,
      totalItems: totalItemCount,
    };
    return of(returnItem);
  }

  private itemsListOutofObservable(itemsOb: any) {
    let items: object[];
    itemsOb.subscribe((result) => {
      items = result;
    });
    return items;
  }

  private getMaxSectionPosition(
    currentItemCount: number,
    itemIncrease: number,
    totalItemCount: number
  ) {
    let maxSectionPosition = currentItemCount + itemIncrease;
    if (maxSectionPosition > totalItemCount) {
      maxSectionPosition = totalItemCount;
    }
    return maxSectionPosition;
  }
}
