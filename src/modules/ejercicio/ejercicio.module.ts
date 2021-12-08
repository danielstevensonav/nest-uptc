import { Module } from '@nestjs/common';
import { EjercicioService } from './ejercicio.service';
import { EjercicioController } from './ejercicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EjercicioRepository } from './ejercicio.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EjercicioRepository])],
  controllers: [EjercicioController],
  providers: [EjercicioService]
})
export class EjercicioModule {}
