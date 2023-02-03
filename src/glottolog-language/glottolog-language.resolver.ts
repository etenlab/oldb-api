import { Injectable } from '@nestjs/common';
import { Args, Mutation, Resolver, Int } from '@nestjs/graphql';
import { GlottologLanguage } from './glottolog-language.model';
import { GlottologLanguageService } from './glottolog-language.service';
// import { NewGlottologLanguageInput } from './new-glottolog-language.input';

@Resolver(() => GlottologLanguage)
@Injectable()
export class GlottologLanguageResolver {
  static glottologLanguage: any;
  constructor(
    private readonly glottologLanguageService: GlottologLanguageService,
  ) {}

  /*
  @Query(() => [GlottologLanguage])
  async glottologLanguages(): Promise<GlottologLanguage[]> {
    const glottologLanguages = await this.glottologLanguageService.list();
    if (!glottologLanguages) {
      return [];
    }
    return glottologLanguages;
  }

  
  @Mutation(() => GlottologLanguage)
  async createGlottologLanguage(
    @Args('newGlottologLanguageData')
    newGlottologLanguageData: NewGlottologLanguageInput,
  ): Promise<GlottologLanguage> {
    const { id } = await this.glottologLanguageService.create(
      newGlottologLanguageData,
    );
    const glottologLanguage =
      await this.glottologLanguageService.findGlottologLanguageById(id);
    if (!glottologLanguage) {
      throw new NotFoundException(id);
    }
    return glottologLanguage;
  }
  */

  @Mutation(() => Boolean)
  async deleteGlottologLanguage(@Args('id', { type: () => Int }) id: number) {
    return this.glottologLanguageService.delete(id);
  }
}
