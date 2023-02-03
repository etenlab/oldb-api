import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { GlottologLanguageResolver } from './glottolog-language.resolver';
import { GlottologLanguageService } from './glottolog-language.service';
import { GlottologLanguage } from './glottolog-language.model';
import { GlottologLanguageDto } from './glottolog-language.dto';

import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      // import the NestjsQueryTypeOrmModule to register the entity with typeorm
      // and provide a QueryService
      imports: [NestjsQueryTypeOrmModule.forFeature([GlottologLanguage])],
      // describe the resolvers you want to expose
      resolvers: [
        {
          DTOClass: GlottologLanguageDto,
          EntityClass: GlottologLanguage,
          enableAggregate: true,
        },
      ],
    }),
  ],
  providers: [GlottologLanguageResolver, GlottologLanguageService],
})
export class GlottologLanguageModule {}

// @Module({
//   imports: [TypeOrmModule.forFeature([GlottologLanguage])],
//   providers: [GlottologLanguageResolver, GlottologLanguageService],
//   exports: [GlottologLanguageService],
// })
// export class GlottologLanguageModule {}
