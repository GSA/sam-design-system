/* tslint:disable */
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, SDSHiercarchicalServiceResult } from './models/SDSAutocompleteServiceInterface';
import { map } from 'rxjs/operators';

export class AutoCompleteSampleDataService implements SDSAutocompleteServiceInterface {

  private loadedData;
  constructor() {
    const data = SampleAutoCompleteData;
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      let results = data.filter(it => it.parentId === item.id);
      item['childCount'] = results.length;
    }
    this.loadedData = data;
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
    let items: object[] = this.itemsListOutofObservable(itemsOb);
    let totalItemCount = items.length;

    let maxSectionPosition = this.getMaxSectionPosition(currentItems, itemIncrease, totalItemCount);
    let subItemsitems = items.slice(currentItems, maxSectionPosition);

    let returnItem = {
      items: subItemsitems,
      totalItems: totalItemCount
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

  private getMaxSectionPosition(currentItemCount: number, itemIncrease: number, totalItemCount: number) {
    let maxSectionPosition = currentItemCount + itemIncrease;
    if (maxSectionPosition > totalItemCount) {
      maxSectionPosition = totalItemCount;
    }
    return maxSectionPosition;
  }

}

export let SampleAutoCompleteData = [
  { 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1' },
  { 'id': '2', 'parentId': '1', 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2' },
  { 'id': '3', 'parentId': '2', 'name': 'Level 3', 'subtext': 'id 3', 'type': 'Level 3' },
  { 'id': '4', 'parentId': '3', 'name': 'Level 4', 'subtext': 'id 4', 'type': 'Level 4' },
  { 'id': '5', 'parentId': '4', 'name': 'Level 5', 'subtext': 'id 5', 'type': 'Level 5' },
  { 'id': '6', 'parentId': '5', 'name': 'Level 6', 'subtext': 'id 6', 'type': 'Level 6' },
  { 'id': '7', 'parentId': '6', 'name': 'Level 7', 'subtext': 'id 7', 'type': 'Level 7' },
  { 'id': '8', 'parentId': '5', 'name': 'Level 6', 'subtext': 'id 8', 'type': 'Level 6' },
  { 'id': '9', 'parentId': '8', 'name': 'Level 7', 'subtext': 'id 9', 'type': 'Level 7' },
  { 'id': '10', 'parentId': '8', 'name': 'Level 7', 'subtext': 'id 10', 'type': 'Level 7' },
  { 'id': '11', 'parentId': '5', 'name': 'Level 6', 'subtext': 'id 11', 'type': 'Level 6' }

];


