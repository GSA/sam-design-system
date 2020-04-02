import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, SDSHiercarchicalServiceResult } from '@gsa-sam/components';

@Injectable({ providedIn: 'root' })
export class AcSample1Service implements SDSAutocompleteServiceInterface {
  constructor() {  }

  getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
    console.log('get text 1');
    let items = [
      { id: '1', name: 'one' },
      { id: '2', name: 'two' },
      { id: '3', name: 'three' },
      { id: '4', name: 'four' },
    ];

    let returnItem = {
      items: items,
      totalItems: 3,
    };

    return of(returnItem);
  }
}
