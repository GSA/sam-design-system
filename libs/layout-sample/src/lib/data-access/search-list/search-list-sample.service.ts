import { SearchListSampleData } from './search-list-sample.data';
export class SearchListSampleService implements SearchList {



    getData(search: Search): Result {
        console.log(search);
        let start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        let end = start + search.page.pageSize;
        console.log(start + ' ' + end);
        return {
            items: SearchListSampleData.slice(start, end),
            totalItems: SearchListSampleData.length
        }

    }

}

export class Search {
    page = {
        pageNumber: 1,
        pageSize: 25,
        totalPages: 0
    };

    sortField: string

}

export class Result {
    totalItems: number;
    items: any[];
}
export interface SearchList {

    getData(search: Search): Result;
}