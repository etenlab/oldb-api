import { ObjectType, ID } from '@nestjs/graphql';
import { FilterableField, IDField, KeySet } from '@nestjs-query/query-graphql';

@ObjectType('Iso6392')
@KeySet(['id'])
export class Iso6392Dto {
  @IDField(() => ID)
  id!: number;

  @FilterableField(() => String)
  iso_639_2: string;

  @FilterableField(() => String, { nullable: true })
  entry_type: string;

  @FilterableField(() => String)
  iso_639_1: string;

  @FilterableField(() => String)
  english_name: string;

  @FilterableField(() => String)
  french_name: string;

  @FilterableField(() => String)
  german_name: string;
}
