import { Injectable, Logger } from '@nestjs/common';
import Airtable, { Base, FieldSet, Records } from 'airtable';
import { DataTable, TblHeader } from './airtable.dto';

@Injectable()
export class AirtableService {
  private _airtableBase: Base;

  constructor() {
    this.init();
  }

  //#region data mapping
  mapRawToDto(dataSets: Records<FieldSet>): DataTable {
    const dataTbl: DataTable = {
      rows: [],
      headers: [],
      tableInfo: Object.create(null),
    };
    const headerKeys = {};
    for (const dataSet of dataSets) {
      const rowHeaderKeys = Object.keys(dataSet.fields);
      for (const key of rowHeaderKeys) {
        headerKeys[key] = key;
      }
      dataTbl.rows.push({ id: dataSet.id, ...dataSet.fields });
    }
    dataTbl.headers = Object.keys(headerKeys).map(
      (hKey) => ({ field: hKey, title: hKey } as TblHeader),
    );
    dataTbl.tableInfo.totalRows = dataTbl.rows.length;
    dataTbl.tableInfo.title = 'SLI Data';
    return dataTbl;
  }
  //#endregion

  private init() {
    this._airtableBase = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
    }).base(process.env.AIRTABLE_BASE_ID);
  }

  async getTableRecords(query?: Record<string, any>): Promise<DataTable> {
    try {
      const recordSets = await this._airtableBase(process.env.AIRTABLE_TABLE_ID)
        .select({})
        .firstPage();
      return this.mapRawToDto(recordSets);
    } catch (error) {
      Logger.error('getTableFirstPageRecords error::', error);
    }
    return null;
  }
}
