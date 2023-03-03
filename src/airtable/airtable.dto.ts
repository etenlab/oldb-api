export interface TableInfo {
  id?: string | number;
  title: string;
  totalRows: number;
}
export interface TblHeader {
  key: string;
  title: string;
}
export interface TblRow {
  id?: string | number;
  [key: string]: string | number | boolean;
}
export interface DataTable {
  tableInfo: TableInfo;
  headers: TblHeader[];
  rows: TblRow[];
}
