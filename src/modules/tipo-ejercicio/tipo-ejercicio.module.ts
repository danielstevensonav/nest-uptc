import { Module } from '@nestjs/common';
import { TipoEjercicioService } from './tipo-ejercicio.service';
import { TipoEjercicioController } from './tipo-ejercicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEjercicioRepository } from './tipo-ejercicio.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TipoEjercicioRepository])],
  controllers: [TipoEjercicioController],
  providers: [TipoEjercicioService]
})
export class TipoEjercicioModule {}
