import { Observable } from 'rxjs';
export class SearchParameters {

    /**
     * page  
     */
    page: Page;

    /**
     * Sort value
     */
    sortField: string

    /**
     * filter data
     */
    filter: any;

}

export interface Page {

    /**
     * Page number
     */
    pageNumber: number;

    /**
     * Page size
     */
    pageSize: number;

    /**
     * Total number of pages
     */
    totalPages: number;

}

export class SearchResult {

    /**
     * Total number of items (beyond the page)
     */
    totalItems: number;

    /**
     * Items to be displayed
     */
    items: any[];
}



export interface SearchListInterface {

    /**
     * Method to get the takes it takes in the SearchParameters and returns SearchResult object
     * @param search 
     */
    getData(search: SearchParameters): Observable<SearchResult>;
}

export class sortItem {
    /**
     * Text to be displayed
     */
    text: string;

    /**
     * Value of Item
     */
    value: string;


}

export class SearchListConfiguration {

    /**
     * List of sort by items
     */
    sortList: sortItem[];

    /**
     * default sort value
     */
    defaultSortValue: string;

    /**
     * Starting page size
     */
    pageSize: number = 25;

}

export interface ResultsModel {
    sort?: string;
    page?: number;
    filterModel: any;
}