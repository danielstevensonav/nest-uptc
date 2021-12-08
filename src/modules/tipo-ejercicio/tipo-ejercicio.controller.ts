import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TipoEjercicioService } from './tipo-ejercicio.service';
import { TipoEjercicio } from '../entities/TipoEjercicio';

@Controller('tipo-ejercicio')
export class TipoEjercicioController {
  constructor(private readonly tipoEjercicioService: TipoEjercicioService) {}

  @Post()
  create(@Body() tipoEjercicio: TipoEjercicio) {
    return this.tipoEjercicioService.create(tipoEjercicio);
  }

  @Get('/list')
  findAll() {
    return this.tipoEjercicioService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.tipoEjercicioService.findOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() tipoEjercicio: TipoEjercicio) {
    return this.tipoEjercicioService.update(id, tipoEjercicio);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.tipoEjercicioService.remove(id);
  }
}
