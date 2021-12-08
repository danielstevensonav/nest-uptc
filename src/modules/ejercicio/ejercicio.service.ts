import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ejercicio } from '../entities/Ejercicio';
import { TipoEjercicio } from '../entities/TipoEjercicio';
import { EjercicioRepository } from './ejercicio.repository';

@Injectable()
export class EjercicioService {

  constructor(
    @InjectRepository(Ejercicio)
    private ejercicioRepository: EjercicioRepository,
  ) {}

  async create(ejercicio: Ejercicio) {
    return await this.ejercicioRepository.save(ejercicio);
  }

  findAll() {
    return this.ejercicioRepository.createQueryBuilder('ejercicio')
    .innerJoinAndSelect("ejercicio.tipoEjercicio", 'tipoEjercicio')
    .select(['ejercicio.id_ejercicio',
    'ejercicio.nombre_ejercicio',
     'ejercicio.dsc_ejercicio' ,
      'tipoEjercicio.id_tipo_ejercicio',
      'tipoEjercicio.dsc_tipo_ejercicio'])
    .getMany();
  }

  findOne(id: number) {
    return this.ejercicioRepository.findOne(id);
  }

  async update(id: number, ejercicio: Ejercicio): Promise<Ejercicio> {
    await this.ejercicioRepository.update(id, ejercicio);
    return ejercicio;
  }

  async remove(id: number): Promise<Ejercicio> {
    const record = this.ejercicioRepository.findOne(id);
    await this.ejercicioRepository.delete(id);
    return record;
  }
}
