import { Body, Controller, Post } from '@nestjs/common';
import { AirtableQueryModel } from './airtable.query';
import { AirtableService } from './airtable.service';

@Controller('airtable')
export class AirtableController {
  constructor(private readonly _airtableService: AirtableService) {}

  @Post('search')
  async getInfo(@Body() query: Record<string, any>) {
    return this._airtableService.getTableRecords(new AirtableQueryModel(query));
  }
}
