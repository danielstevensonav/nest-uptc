import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GrupoDeportivo } from '../entities/GrupoDeportivo';
import { GrupoDeportivoRepository } from './grupo-deportivo.repository';

@Injectable()
export class GrupoDeportivoService {
  constructor(
    @InjectRepository(GrupoDeportivo)
    private grupoDeportivoRepository: GrupoDeportivoRepository,
  ) {}


  async create(grupoDeportivo: GrupoDeportivo) {
    console.log(grupoDeportivo);
    return await this.grupoDeportivoRepository.save(grupoDeportivo);
  }

  async findAll() {
    return await this.grupoDeportivoRepository.createQueryBuilder('grupo_deportivo')
    .leftJoinAndSelect("grupo_deportivo.especialista", 'especialista')
    .leftJoinAndSelect("grupo_deportivo.especialista2", 'especialista2')
    .select(['grupo_deportivo.csc_intentos',
    'grupo_deportivo.intento',
     'grupo_deportivo.id_especialista' ,
      'grupo_deportivo.esp_id_especialista',
      'especialista.id_especialista',
      'especialista.nombre',
      'especialista2.id_especialista',
      'especialista2.nombre'])
    .getMany();
  }

  findOne(id: number) {
    return this.grupoDeportivoRepository.findOne(id);
  }

  async update(id: number, grupoDeportivo: GrupoDeportivo): Promise<GrupoDeportivo> {
    await this.grupoDeportivoRepository.update(id, grupoDeportivo);
    return grupoDeportivo;
  }

  async remove(id: number): Promise<GrupoDeportivo> {
    const record = this.grupoDeportivoRepository.findOne(id);
    await this.grupoDeportivoRepository.delete(id);
    return record;
  }
}
