import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, SDSHiercarchicalServiceResult } from '@gsa-sam/components';

@Injectable({ providedIn: 'root' })
export class AcSample2Service implements SDSAutocompleteServiceInterface {
  constructor() {  }

  getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
    console.log('get by text 2');
    let items = [
      { id: '4', name: 'four' },
      { id: '5', name: 'five' },
      { id: '6', name: 'six' },
    ];

    let returnItem = {
      items: items,
      totalItems: 3,
    };

    return of(returnItem);
  }
}
