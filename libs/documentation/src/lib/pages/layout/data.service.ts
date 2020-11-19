import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { registrationData } from './search-data';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';
@Injectable({ providedIn: 'root' })
export class DataService {
  private data: any[];
  public getData(search: SearchParameters): Observable<SearchResult> {
    this.data = registrationData._embedded.results;
    if (this.data) {
      if (search.filter) {
        if (search.filter[0].keyword) {
          const toReturn = [];
          for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            if (
              search.filter[0].keyword &&
              item.title
                .toLowerCase()
                .indexOf(search.filter[0].keyword.toLowerCase()) !== -1
            ) {
              toReturn.push(item);
            }
          }
          this.data = toReturn;
        }
      }
      const start =
        search.page.pageNumber * search.page.pageSize - search.page.pageSize;
      const end = start + search.page.pageSize;
      return of({
        items: this.data.slice(start, end),
        totalItems: this.data.length
      });
    } else {
      return of({
        items: [],
        totalItems: 0
      });
    }
  }
}
