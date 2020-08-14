export class SdsTableColumnSettings {
  primaryKey: string;
  alternativeKeys?: string[];
  header?: string;
  format?: string;
  sticky?: boolean = false;
}
