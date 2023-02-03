import { Module } from '@nestjs/common';

import { Iso6392sResolver } from './iso-639-2.resolver';
import { Iso6392Service } from './iso-639-2.service';
import { Iso6392 } from './iso-639-2.model';
import { Iso6392Dto } from './iso-639-2.dto';

import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([Iso6392])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: Iso6392Dto,
          EntityClass: Iso6392,
          enableAggregate: true,
        },
      ],
    }),
  ],
  providers: [Iso6392sResolver, Iso6392Service],
})
export class Iso6392Module {}
