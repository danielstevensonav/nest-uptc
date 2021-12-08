import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilities } from 'src/util/Utilities';
import { MusculoEjercicio } from '../entities/MusculoEjercicio';
import { MusculoEjercicioRepository } from './musculo-ejercicio.repository';

@Injectable()
export class MusculoEjercicioService {
  constructor(
    @InjectRepository(MusculoEjercicio)
    private musculoEjercicioRepository: MusculoEjercicioRepository,
  ) {}


  async create(musculoEjercicio: MusculoEjercicio) {
    return await this.musculoEjercicioRepository.save(musculoEjercicio);
  }

  findAll() {
    return this.musculoEjercicioRepository.createQueryBuilder('parte_cuerpo')
    .innerJoinAndSelect("parte_cuerpo.ejercicio", 'ejercicio')
    .select(['parte_cuerpo.id_musculo', 
              'ejercicio.id_ejercicio'
            ])
    .getRawMany();
  }

  async remove(musculoEjercicio: MusculoEjercicio): Promise<MusculoEjercicio> {
    const deleteResult = await Utilities.deleteWhere(MusculoEjercicio, 'id_musculo = :parteCuerpo AND id_ejercicio = :ejercicio', musculoEjercicio);
    if (!deleteResult.affected) {
      throw new NotFoundException();
    }
    return musculoEjercicio;
  }
}
