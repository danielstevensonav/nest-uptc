import { Module } from '@nestjs/common';
import { MusculoEjercicioService } from './musculo-ejercicio.service';
import { MusculoEjercicioController } from './musculo-ejercicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusculoEjercicioRepository } from './musculo-ejercicio.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MusculoEjercicioRepository])],
  controllers: [MusculoEjercicioController],
  providers: [MusculoEjercicioService]
})
export class MusculoEjercicioModule {}
