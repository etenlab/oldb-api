import { Directive, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(`iso_639_2`, {
  schema: `public`,
})
@Directive('@key(fields: "id")')
export class Iso6392 {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  iso_639_2: string;

  @Column()
  @Field(() => String, { nullable: true })
  entry_type: string;

  @Column()
  @Field(() => String)
  iso_639_1: string;

  @Column()
  @Field(() => String)
  english_name: string;

  @Column()
  @Field(() => String)
  french_name: string;

  @Column()
  @Field(() => String)
  german_name: string;
}
