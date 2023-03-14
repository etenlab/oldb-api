import { Injectable, Logger } from '@nestjs/common';
import Airtable, { Base, FieldSet, Records } from 'airtable';
import { DataTable, TblHeader } from './airtable.dto';
import { AirtableQueryModel } from './airtable.query';

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
    dataTbl.tableInfo.totalRows = Number(
      process.env.AIRTABLE_TOTAL_RECORDS || 250,
    );
    dataTbl.tableInfo.title = process.env.AIRTABLE_TABLE_NAME;
    return dataTbl;
  }
  //#endregion

  private init() {
    this._airtableBase = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
    }).base(process.env.AIRTABLE_BASE_ID);
  }

  /**
   * No need to specify pagination params because api hardcoded to get all data from the
   * airtable due to error when passing 'offset' to airtable.js
   * So if in future you'll need to get paginated data from the Airtable, use raw http requests
   * https://airtable.com/developers/web/api/list-records
   *
   */
  async getTableRecords(query?: AirtableQueryModel): Promise<DataTable> {
    try {
      const recordSets = await this._airtableBase(process.env.AIRTABLE_TABLE_ID)
        .select()
        .all();

      const res = this.mapRawToDto(recordSets);
      return res;
    } catch (error) {
      Logger.error('getTableFirstPageRecords error::', error);
    }
    return null;
  }
}
