import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Especialista } from '../entities/Especialista';
import { EspecialistaRepository } from './especialista.repository';

@Injectable()
export class EspecialistaService {
  constructor(
    @InjectRepository(Especialista)
    private especialistaRepository: EspecialistaRepository,
  ) {}


  async create(especialista: Especialista) {
    console.log(especialista);
    return await this.especialistaRepository.save(especialista);
  }

  findAll() {
    return this.especialistaRepository.find();
  }

  findOne(id: number) {
    return this.especialistaRepository.findOne(id);
  }

  async update(id: number, especialista: Especialista): Promise<Especialista> {
    await this.especialistaRepository.update(id, especialista);
    return especialista;
  }

  async remove(id: number): Promise<Especialista> {
    const record = this.especialistaRepository.findOne(id);
    await this.especialistaRepository.delete(id);
    return record;
  }
}
