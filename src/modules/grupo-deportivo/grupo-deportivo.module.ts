import { Module } from '@nestjs/common';
import { GrupoDeportivoService } from './grupo-deportivo.service';
import { GrupoDeportivoController } from './grupo-deportivo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoDeportivoRepository } from './grupo-deportivo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoDeportivoRepository])],
  controllers: [GrupoDeportivoController],
  providers: [GrupoDeportivoService]
})
export class GrupoDeportivoModule {}
