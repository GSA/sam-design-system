export interface TreeTableData {
  description: string,
  title: string,
  year: number,
  id: string,
  children?: Array<TreeTableData>
  totalChildren?: number
}
