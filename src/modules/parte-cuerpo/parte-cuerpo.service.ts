import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParteCuerpo } from '../entities/ParteCuerpo';
import { ParteCuerpoRepository } from './parte-cuerpo.repository';

@Injectable()
export class ParteCuerpoService {
  constructor(
    @InjectRepository(ParteCuerpo)
    private parteCuerpoRepository: ParteCuerpoRepository,
  ) {}


  async create(parteCuerpo: ParteCuerpo) {
    return await this.parteCuerpoRepository.save(parteCuerpo);
  }

  async findAll() {
    return await this.parteCuerpoRepository.createQueryBuilder('parte_cuerpo')
    .leftJoinAndSelect("parte_cuerpo.parteCuerpoHijo", 'parteCuerpo')
    .select(['parte_cuerpo.id_musculo',
    'parte_cuerpo.dsc_musculo',
    'parteCuerpo.id_musculo',
    'parteCuerpo.dsc_musculo'])
    .getMany();
  }

  findOne(id: number) {
    return this.parteCuerpoRepository.findOne(id);
  }

  async update(id: number, parteCuerpo: ParteCuerpo): Promise<ParteCuerpo> {
    await this.parteCuerpoRepository.update(id, parteCuerpo);
    return parteCuerpo;
  }

  async remove(id: number): Promise<ParteCuerpo> {
    const record = this.parteCuerpoRepository.findOne(id);
    await this.parteCuerpoRepository.delete(id);
    return record;
  }
}
