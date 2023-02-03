import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import { FilterableField, IDField, KeySet } from '@nestjs-query/query-graphql';

@ObjectType('GlottologLanguage')
@KeySet(['id'])
export class GlottologLanguageDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField(() => String)
  glottocode: string;

  @FilterableField(() => String)
  name: string;

  @FilterableField(() => String)
  top_level_family: string;

  @FilterableField(() => String)
  iso_639_3: string;

  @FilterableField(() => String)
  macro_area: string;

  @Field(() => Int)
  child_dialects: number;

  @FilterableField(() => String)
  latitude: string;

  @FilterableField(() => String)
  longitude: string;
}
