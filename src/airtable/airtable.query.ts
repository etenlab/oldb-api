export class AirtableQueryModel {
  offset = 0;
  pageSize = 25;
  constructor(init: Partial<AirtableQueryModel>) {
    Object.assign(this, init);
  }
}
