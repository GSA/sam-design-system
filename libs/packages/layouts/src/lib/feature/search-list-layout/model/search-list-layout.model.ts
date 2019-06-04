export class SearchParameters {

    /**
     * 
     */
    page: Page;

    /**
     * 
     */
    sortField: string

}

export interface Page {

    /**
     * 
     */
    pageNumber: number;

    /**
     * 
     */
    pageSize: number;

    /**
     * 
     */
    totalPages: number;

}

export class SearchResult {

    /**
     * 
     */
    totalItems: number;

    /**
     * 
     */
    items: any[];
}



export interface SearchList {

    /**
     * 
     * @param search 
     */
    getData(search: SearchParameters): SearchResult;
}

export class sortItem {
    /**
     * 
     */
    text: string;

    /**
     * 
     */
    value: string;
}

export class SearchListConfiguration {

    /**
     * 
     */
    sortList: sortItem[];

    /**
     * 
     */
    defaultSortValue: string;

    /**
     * 
     */
    pageSize: number = 25;


}