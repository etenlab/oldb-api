import { Module } from '@nestjs/common';
import { AirtableController } from './airtable.controller';
import { AirtableService } from './airtable.service';

@Module({
  imports: [],
  controllers: [AirtableController],
  providers: [AirtableService],
})
export class AirtableModule {}
