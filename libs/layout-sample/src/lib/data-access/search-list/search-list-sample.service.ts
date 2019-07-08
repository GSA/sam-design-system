import { SearchListSampleData } from './search-list-sample.data';
import { Observable, of } from 'rxjs';

import { SearchListInterface, SearchParameters, SearchResult } from '@sam-design-system/layouts';


export class SearchListSampleService implements SearchListInterface {
    getData(search: SearchParameters): Observable<SearchResult> {
        console.log(search);
        let start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        let end = start + search.page.pageSize;
        return of({
            items: SearchListSampleData.slice(start, end),
            totalItems: SearchListSampleData.length
        });
    }
}