import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { registrationData } from './search-data';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';
import { delay } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class DataService {
  private data: any[];
  public getData(search: SearchParameters): Observable<SearchResult> {
    this.data = registrationData._embedded.results;
    if (this.data) {
      if (search.filter) {
        let filterText = '';
        if (search.filter.keyword && search.filter.keyword.keywordTags) {
          filterText = search.filter.keyword.keywordTags[0].text;
        } else if (search.filter.keyword && search.filter.keyword.keywordTextarea) {
          filterText =  search.filter.keyword.keywordTextarea;
        }
        if (search.filter.keyword || search.filter.location) {
          const toReturn = [];
          for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            if (
              search.filter.keyword &&
              item.title
                .toLowerCase()
                .indexOf(filterText.toLowerCase()) !== -1
            ) {
              toReturn.push(item);
            } else if (search.filter.location) {
              const location = search.filter.location;

              if (
                location.country &&
                item.address.country &&
                item.address.country
                  .toLowerCase()
                  .indexOf(location.country.toLowerCase()) > -1
              ) {
                toReturn.push(item);
              } else if (
                location.state &&
                location.state.length &&
                item.address.state &&
                location.state.find(
                  (state) =>
                    item.address.state
                      .toLowerCase()
                      .indexOf(state.id.toLowerCase()) > -1
                )
              ) {
                toReturn.push(item);
              } else if (
                location.city &&
                item.address.city &&
                item.address.city
                  .toLowerCase()
                  .indexOf(location.city.toLowerCase()) > -1
              ) {
                toReturn.push(item);
              } else if (
                location.zipCode &&
                item.address.zip &&
                item.address.zip
                  .toLowerCase()
                  .indexOf(location.city.toLowerCase()) > -1
              ) {
                toReturn.push(item);
              }
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
        totalItems: this.data.length,
      }).pipe(delay(2000));
    } else {
      return of({
        items: [],
        totalItems: 0,
      });
    }
  }
}
