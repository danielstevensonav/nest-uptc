import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusculoEjercicio } from '../entities/MusculoEjercicio';
import { MusculoEjercicioService } from './musculo-ejercicio.service';

@Controller('musculo-ejercicio')
export class MusculoEjercicioController {
  constructor(private readonly musculoEjercicioService: MusculoEjercicioService) {}

  @Post()
  create(@Body() musculoEjercicio: MusculoEjercicio) {
    return this.musculoEjercicioService.create(musculoEjercicio);
  }

  @Get('/list')
  findAll() {
    return this.musculoEjercicioService.findAll();
  }

  @Delete()
  remove(@Body() musculoEjercicio: MusculoEjercicio) {
    return this.musculoEjercicioService.remove(musculoEjercicio);
  }
}
