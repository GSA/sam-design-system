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

export class sortItem {
    text: string;
    value: string;
}

export class SearchListConfig {

    sortList: sortItem;
    defaultSortValue: string;
    pageSize:number;
    

}