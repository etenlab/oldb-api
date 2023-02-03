import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewSilLanguageIndexInput {
  @Field({ nullable: false })
  language_code: string;

  @Field({ nullable: false })
  country_code: string;

  @Field({ nullable: false })
  name_type: string;

  @Field({ nullable: false })
  name: string;
}
