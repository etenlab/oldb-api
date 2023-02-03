import { Injectable, NotFoundException } from '@nestjs/common';
import { NewIso6392Input } from './new-iso-639-2.input';
import { Iso6392 } from './iso-639-2.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Iso6392Service {
  constructor(
    @InjectRepository(Iso6392)
    private iso6392Repository: Repository<Iso6392>,
  ) {}

  async create(data: NewIso6392Input): Promise<Iso6392> {
    const iso6392 = this.iso6392Repository.create(data);
    const savedIso6392 = await this.iso6392Repository.save(iso6392);
    if (!savedIso6392) {
      throw new NotFoundException(savedIso6392.id);
    }
    return savedIso6392;
  }

  async update(id: number, data: NewIso6392Input): Promise<boolean> {
    const iso6392 = await this.iso6392Repository.findOneOrFail({
      where: { id },
    });
    if (!iso6392) {
      throw new NotFoundException(id);
    }
    await this.iso6392Repository.update({ id }, { ...data });
    return true;
  }

  async list(): Promise<Iso6392[]> {
    return this.iso6392Repository.find();
  }

  async findIso6392ById(id: number): Promise<Iso6392> {
    const iso6392 = await this.iso6392Repository.findOneOrFail({
      where: { id },
    });
    if (!iso6392) {
      throw new NotFoundException(`Cannot find post id="${id}"`);
    }
    return iso6392;
  }

  async getCount(): Promise<number> {
    const count = await this.iso6392Repository.count();
    return count;
  }

  async delete(id: number): Promise<boolean> {
    const iso6392 = await this.iso6392Repository.findOne({
      where: {
        id,
      },
    });

    if (!iso6392) {
      return false;
    }

    await this.iso6392Repository.delete(id);
    return true;
  }
}
