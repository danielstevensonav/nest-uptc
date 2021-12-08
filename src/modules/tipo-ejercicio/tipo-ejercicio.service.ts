import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoEjercicio } from '../entities/TipoEjercicio';
import { TipoEjercicioRepository } from './tipo-ejercicio.repository';

@Injectable()
export class TipoEjercicioService {

  constructor(
    @InjectRepository(TipoEjercicio)
    private tipoEjercicioRepository: TipoEjercicioRepository,
  ) {}


  async create(tipoEjercicio: TipoEjercicio) {
    return await this.tipoEjercicioRepository.save(tipoEjercicio);
  }

  findAll() {
    return this.tipoEjercicioRepository.find();
  }

  findOne(id: number) {
    return this.tipoEjercicioRepository.findOne(id);
  }

  async update(id: number, tipoEjercicio: TipoEjercicio): Promise<TipoEjercicio> {
    await this.tipoEjercicioRepository.update(id, tipoEjercicio);
    return tipoEjercicio;
  }

  async remove(id: number): Promise<TipoEjercicio> {
    const record = this.tipoEjercicioRepository.findOne(id);
    await this.tipoEjercicioRepository.delete(id);
    return record;
  }
}
