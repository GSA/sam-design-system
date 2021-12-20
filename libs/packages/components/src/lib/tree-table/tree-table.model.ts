
export interface SdsTreeTableData {
  /** Id to use to uniquely idetntify the row */
  id: string;

  /** Children of row - by default, children rows will be collapsed */
  children?: SdsTreeTableData[];

  /** 
   * Total number of children for this table data. If this value
   * is greater than children's length, then a button will be shown
   * to users to load remaining children
   */
  totalChildren: number;

  /** 
   * Additional data to add in - primarly useful for adding in data
   * to display in the table
   */
  [key: string]: any;

  /**
   * Whether this row is expanded to display its children or not
   */
  expanded?: boolean;
}