import { Injectable, NotFoundException } from '@nestjs/common';
import { NewGlottologLanguageInput } from './new-glottolog-language.input';
import { GlottologLanguage } from './glottolog-language.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GlottologLanguageService {
  constructor(
    @InjectRepository(GlottologLanguage)
    private glottologLanguageRepository: Repository<GlottologLanguage>,
  ) {}

  async create(data: NewGlottologLanguageInput): Promise<GlottologLanguage> {
    const glottologLanguage = this.glottologLanguageRepository.create(data);
    const savedGlottologLanguage = await this.glottologLanguageRepository.save(
      glottologLanguage,
    );
    if (!savedGlottologLanguage) {
      throw new NotFoundException(savedGlottologLanguage.id);
    }
    return savedGlottologLanguage;
  }

  async update(id: number, data: NewGlottologLanguageInput): Promise<boolean> {
    const glottologLanguage =
      await this.glottologLanguageRepository.findOneOrFail({
        where: { id },
      });
    if (!glottologLanguage) {
      throw new NotFoundException(id);
    }
    await this.glottologLanguageRepository.update({ id }, { ...data });
    return true;
  }

  async list(): Promise<GlottologLanguage[]> {
    return this.glottologLanguageRepository.find();
  }

  async findGlottologLanguageById(id: number): Promise<GlottologLanguage> {
    const glottologLanguage =
      await this.glottologLanguageRepository.findOneOrFail({
        where: { id },
      });
    if (!glottologLanguage) {
      throw new NotFoundException(`Cannot find post id="${id}"`);
    }
    return glottologLanguage;
  }

  async getCount(): Promise<number> {
    const count = await this.glottologLanguageRepository.count();
    return count;
  }

  async delete(id: number): Promise<boolean> {
    const glottologLanguage = await this.glottologLanguageRepository.findOne({
      where: {
        id,
      },
    });

    if (!glottologLanguage) {
      return false;
    }

    await this.glottologLanguageRepository.delete(id);
    return true;
  }
}
