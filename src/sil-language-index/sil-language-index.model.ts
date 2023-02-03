import { Directive, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(`sil_language_index`, {
  schema: `public`,
})
@Directive('@key(fields: "id")')
export class SilLanguageIndex {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  language_code: string;

  @Column()
  @Field(() => String)
  country_code: string;

  @Column()
  @Field(() => String)
  name_type: string;

  @Column()
  @Field(() => String)
  name: string;
}
