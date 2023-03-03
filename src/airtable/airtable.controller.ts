import { Controller, Get, Post } from '@nestjs/common';
import { AirtableService } from './airtable.service';

@Controller('airtable')
export class AirtableController {
  constructor(private readonly _airtableService: AirtableService) {}

  @Post()
  async getInfo() {
    return this._airtableService.getTableRecords();
  }
}
