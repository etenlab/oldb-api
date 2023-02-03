import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewGlottologLanguageInput {
  @Field({ nullable: false })
  glottocode: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  top_level_family: string;

  @Field({ nullable: false })
  iso_639_3: string;

  @Field({ nullable: false })
  macro_area: string;

  @Field({ nullable: false })
  child_dialects: number;

  @Field({ nullable: false })
  latitude: string;

  @Field({ nullable: false })
  longitude: string;
}
