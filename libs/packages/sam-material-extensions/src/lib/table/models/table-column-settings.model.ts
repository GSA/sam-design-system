export class SdsTableColumnSettings {
  /**
   *  primary key to access value from data
   */
  primaryKey: string;
  /**
   * Displayed column header -- defaults to primaryKey value in titlecase
   */
  header?: string;
  /**
   * Column sticks to left side of table on horizontal scroll
   */
  sticky?: boolean = false;
}
