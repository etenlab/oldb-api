import { Module } from '@nestjs/common';

import { SilLanguageIndexResolver } from './sil-language-index.resolver';
import { SilLanguageIndexService } from './sil-language-index.service';
import { SilLanguageIndex } from './sil-language-index.model';
import { SilLanguageIndexDto } from './sil-language-index.dto';

import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([SilLanguageIndex])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: SilLanguageIndexDto,
          EntityClass: SilLanguageIndex,
          enableAggregate: true,
        },
      ],
    }),
  ],
  providers: [SilLanguageIndexResolver, SilLanguageIndexService],
})
export class SilLanguageIndexModule {}
