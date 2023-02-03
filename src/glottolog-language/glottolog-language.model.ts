import { Directive, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(`glottolog_language`, {
  schema: `public`,
})
@Directive('@key(fields: "id")')
export class GlottologLanguage {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  glottocode: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  top_level_family: string;

  @Column()
  @Field(() => String)
  iso_639_3: string;

  @Column()
  @Field(() => String)
  macro_area: string;

  @Column()
  @Field(() => Int)
  child_dialects: number;

  @Column()
  @Field(() => String)
  latitude: string;

  @Column()
  @Field(() => String)
  longitude: string;
}
