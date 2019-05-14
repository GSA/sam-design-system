import { Observable } from 'rxjs';
//import { Sort } from '../../components/data-table/sort.directive';

export interface SamHiercarchicalServiceInterface {

    /**
     * 
     * @param searchValue 
     */
    getDataByText(currentItems: number, searchValue?: string): Observable<SamHiercarchicalServiceResult>;


    /**
     * 
     * @param id 
     */
    getHiercarchicalById(item :SamHiercarchicalServiceSearchItem): Observable<SamHiercarchicalServiceResult>;

}

export interface SamHiercarchicalServiceResult {
    /**
     * 
     */
    items: object[];
    
    /**
     * 
     */
    totalItems: number;
}

export class SamHiercarchicalServiceSearchItem {

    /**
     * 
     */
    id: string;

    /**
     * 
     */
    searchValue: string;

    /**
     * 
     */
   // sort: Sort;

    /**
     * 
     */
    currentItemCount: number;
}

