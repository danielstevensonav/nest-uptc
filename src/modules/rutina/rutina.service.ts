import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilities } from 'src/util/Utilities';
import { Rutina } from '../entities/Rutina';
import { RutinaRepository } from './rutina.repository';

@Injectable()
export class RutinaService {
  constructor(
    @InjectRepository(Rutina)
    private rutinaRepository: RutinaRepository,
  ) {}


  async create(rutina: Rutina) {
    console.log(rutina);
    return await this.rutinaRepository.save(rutina);
  }

  findAll() {
    return this.rutinaRepository.createQueryBuilder('especialista')
    .leftJoinAndSelect("especialista.ejercicio", 'ejercicio')
    .select(['especialista', 
              'ejercicio'
            ])
    .getRawMany();
  }

  async remove(rutina: Rutina): Promise<Rutina> {
    const deleteResult = await Utilities.deleteWhere(Rutina, 'id_musculo = :parte_cuerpo AND id_ejercicio = :ejercicio', rutina);
    if (!deleteResult.affected) {
      throw new NotFoundException();
    }
    return rutina;
  }
}
