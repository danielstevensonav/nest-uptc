import { Module } from '@nestjs/common';
import { EspecialistaService } from './especialista.service';
import { EspecialistaController } from './especialista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialistaRepository } from './especialista.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EspecialistaRepository])],
  controllers: [EspecialistaController],
  providers: [EspecialistaService]
})
export class EspecialistaModule {}
