import { Module } from '@nestjs/common';
import { RutinaService } from './rutina.service';
import { RutinaController } from './rutina.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rutina } from '../entities/Rutina';

@Module({
  imports: [TypeOrmModule.forFeature([Rutina])],
  controllers: [RutinaController],
  providers: [RutinaService]
})
export class RutinaModule {}
