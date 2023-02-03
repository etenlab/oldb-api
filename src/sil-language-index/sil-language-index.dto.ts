import { ObjectType, ID } from '@nestjs/graphql';
import { FilterableField, IDField, KeySet } from '@nestjs-query/query-graphql';

@ObjectType('SilLanguageIndex')
@KeySet(['id'])
export class SilLanguageIndexDto {
  @IDField(() => ID)
  id!: number;

  @FilterableField(() => String)
  language_code: string;

  @FilterableField(() => String)
  country_code: string;

  @FilterableField(() => String)
  name_type: string;

  @FilterableField(() => String)
  name: string;
}
