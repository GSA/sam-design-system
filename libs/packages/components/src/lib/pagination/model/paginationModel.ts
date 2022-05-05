export class PaginationConfigurationModel {
  /**
   * used to distinguish fields
   */
  id: string;
}

export class PaginationModel {
  /**
   * current page number
   */
  pageNumber: number;

  /**
   * size of page ex 25, 50,100
   */
  pageSize: number;

  /**
   * total number of pages
   */
  totalPages: number;
}
