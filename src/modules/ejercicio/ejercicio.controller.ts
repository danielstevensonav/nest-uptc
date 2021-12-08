import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Ejercicio } from '../entities/Ejercicio';
import { EjercicioService } from './ejercicio.service';

@Controller('ejercicio')
export class EjercicioController {
  constructor(private readonly ejercicioService: EjercicioService) {}

  @Post()
  create(@Body() ejercicio: Ejercicio) {
    return this.ejercicioService.create(ejercicio);
  }

  @Get('/list')
  findAll() {
    return this.ejercicioService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.ejercicioService.findOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() ejercicio: Ejercicio) {
    return this.ejercicioService.update(id, ejercicio);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.ejercicioService.remove(id);
  }
}
