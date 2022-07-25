import { Observable } from 'rxjs';
export interface SDSAutocompleteServiceInterface {
  /**
   *
   * @param searchValue
   */
  getDataByText(
    currentItems: number,
    searchValue?: string
  ): Observable<SDSHiercarchicalServiceResult>;
}

export interface SDSHiercarchicalServiceResult {
  /**
   *
   */
  items: object[];

  /**
   *
   */
  totalItems: number;
}

export class SDSHiercarchicalServiceSearchItem {
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
