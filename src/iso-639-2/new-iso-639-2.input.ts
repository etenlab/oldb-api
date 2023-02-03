import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewIso6392Input {
  @Field({ nullable: false })
  iso_639_2: string;

  @Field({ nullable: false })
  entry_type: string;

  @Field({ nullable: false })
  iso_639_1: string;

  @Field({ nullable: false })
  english_name: string;

  @Field({ nullable: false })
  french_name: string;

  @Field({ nullable: false })
  german_name: string;
}
