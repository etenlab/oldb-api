import { Injectable } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { Iso6392 } from './iso-639-2.model';
import { Iso6392Service } from './iso-639-2.service';
// import { NewIso6392Input } from './new-iso-639-2.input';

@Resolver(() => Iso6392)
@Injectable()
export class Iso6392sResolver {
  static iso6392: any;
  constructor(private readonly iso6392sService: Iso6392Service) {}

  /*
  @Query(() => [Iso6392])
  async iso6392s(): Promise<Iso6392[]> {
    const iso6392s = await this.iso6392sService.list();
    if (!iso6392s) {
      return [];
    }
    return iso6392s;
  }

  
  @Mutation(() => Iso6392)
  async createOneIso6392(
    @Args('newIso6392Data') newIso6392Data: NewIso6392Input,
  ): Promise<Iso6392> {
    const { id } = await this.iso6392sService.create(newIso6392Data);
    const iso6392 = await this.iso6392sService.findIso6392ById(id);
    if (!iso6392) {
      throw new NotFoundException(id);
    }
    return iso6392;
  }

  @Mutation(() => Boolean)
  async deleteIso6392(@Args('id', { type: () => Int }) id: number) {
    return this.iso6392sService.delete(id);
  }
  */
}
