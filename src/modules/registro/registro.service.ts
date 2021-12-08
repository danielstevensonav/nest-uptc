import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Registro } from '../entities/Registro';
import { RegistroRepository } from './registro.repository';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private registroRepository: RegistroRepository,
  ) {}


  async create(registro: Registro) {
    console.log(registro);
    return await this.registroRepository.save(registro);
  }

  findAll() {
    return this.registroRepository.find();
  }

  findOne(id: number) {
    return this.registroRepository.findOne(id);
  }

  async update(id: number, registro: Registro): Promise<Registro> {
    await this.registroRepository.update(id, registro);
    return registro;
  }

  async remove(id: number): Promise<Registro> {
    const record = this.registroRepository.findOne(id);
    await this.registroRepository.delete(id);
    return record;
  }
}
