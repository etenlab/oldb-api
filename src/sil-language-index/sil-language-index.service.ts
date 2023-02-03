import { Injectable, NotFoundException } from '@nestjs/common';
import { NewSilLanguageIndexInput } from './new-sil-language-index.input';
import { SilLanguageIndex } from './sil-language-index.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SilLanguageIndexService {
  constructor(
    @InjectRepository(SilLanguageIndex)
    private silLanguageIndexRepository: Repository<SilLanguageIndex>,
  ) {}

  async create(data: NewSilLanguageIndexInput): Promise<SilLanguageIndex> {
    const silLanguageIndex = this.silLanguageIndexRepository.create(data);
    const savedSilLanguageIndex = await this.silLanguageIndexRepository.save(
      silLanguageIndex,
    );
    if (!savedSilLanguageIndex) {
      throw new NotFoundException(savedSilLanguageIndex.id);
    }
    return savedSilLanguageIndex;
  }

  async update(id: number, data: NewSilLanguageIndexInput): Promise<boolean> {
    const silLanguageIndex =
      await this.silLanguageIndexRepository.findOneOrFail({
        where: { id },
      });
    if (!silLanguageIndex) {
      throw new NotFoundException(id);
    }
    await this.silLanguageIndexRepository.update({ id }, { ...data });
    return true;
  }

  async list(): Promise<SilLanguageIndex[]> {
    return this.silLanguageIndexRepository.find();
  }

  async findSilLanguageIndexById(id: number): Promise<SilLanguageIndex> {
    const silLanguageIndex =
      await this.silLanguageIndexRepository.findOneOrFail({
        where: { id },
      });
    if (!silLanguageIndex) {
      throw new NotFoundException(`Cannot find post id="${id}"`);
    }
    return silLanguageIndex;
  }

  async getCount(): Promise<number> {
    const count = await this.silLanguageIndexRepository.count();
    return count;
  }

  async delete(id: number): Promise<boolean> {
    const silLanguageIndex = await this.silLanguageIndexRepository.findOne({
      where: {
        id,
      },
    });

    if (!silLanguageIndex) {
      return false;
    }

    await this.silLanguageIndexRepository.delete(id);
    return true;
  }
}
