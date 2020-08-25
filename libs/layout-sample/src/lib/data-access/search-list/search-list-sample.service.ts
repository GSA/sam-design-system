import { SearchListSampleData } from './search-list-sample.data';
import { Observable, of } from 'rxjs';
import { SearchListInterface, SearchParameters, SearchResult } from '@gsa-sam/layouts';

export class SearchListSampleService implements SearchListInterface {
    getData(search: SearchParameters): Observable<SearchResult> {
        let data = SearchListSampleData;
        if (search.filter) {
            let toReturn = [];
            for (let i = 0; i < data.length; i++) {
                let item = data[i];
                if (search.filter.searchKeyword.keyword && item.text.toLowerCase().indexOf(search.filter.searchKeyword.keyword.toLowerCase()) !== -1) {
                    toReturn.push(item);
                }
            }
            data = toReturn;
        }
        let start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        let end = start + search.page.pageSize;
        return of({
            items: data.slice(start, end),
            totalItems: data.length
        });
    }
}