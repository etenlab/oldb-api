import { Injectable } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { SilLanguageIndex } from './sil-language-index.model';
import { SilLanguageIndexService } from './sil-language-index.service';
// import { NewSilLanguageIndexInput } from './new-sil-language-index.input';

@Resolver(() => SilLanguageIndex)
@Injectable()
export class SilLanguageIndexResolver {
  static silLanguageIndex: any;
  constructor(
    private readonly silLanguageIndexsService: SilLanguageIndexService,
  ) {}

  /*
  @Query(() => [SilLanguageIndex])
  async silLanguageIndexs(): Promise<SilLanguageIndex[]> {
    const silLanguageIndexs = await this.silLanguageIndexsService.list();
    if (!silLanguageIndexs) {
      return [];
    }
    return silLanguageIndexs;
  }
  
  @Mutation(() => SilLanguageIndex)
  async createSilLanguageIndex(
    @Args('newSilLanguageIndexData')
    newSilLanguageIndexData: NewSilLanguageIndexInput,
  ): Promise<SilLanguageIndex> {
    const { id } = await this.silLanguageIndexsService.create(
      newSilLanguageIndexData,
    );
    const silLanguageIndex =
      await this.silLanguageIndexsService.findSilLanguageIndexById(id);
    if (!silLanguageIndex) {
      throw new NotFoundException(id);
    }
    return silLanguageIndex;
  }

  @Mutation(() => Boolean)
  async deleteSilLanguageIndex(@Args('id', { type: () => Int }) id: number) {
    return this.silLanguageIndexsService.delete(id);
  }
  */
}
