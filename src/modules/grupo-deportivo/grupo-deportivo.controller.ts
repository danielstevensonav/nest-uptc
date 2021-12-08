import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GrupoDeportivo } from '../entities/GrupoDeportivo';
import { GrupoDeportivoService } from './grupo-deportivo.service';

@Controller('grupo-deportivo')
export class GrupoDeportivoController {
  constructor(private readonly grupoDeportivoService: GrupoDeportivoService) {}

  @Post()
  create(@Body() grupoDeportivo: GrupoDeportivo) {
    return this.grupoDeportivoService.create(grupoDeportivo);
  }

  @Get('/list')
  findAll() {
    return this.grupoDeportivoService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.grupoDeportivoService.findOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() grupoDeportivo: GrupoDeportivo) {
    return this.grupoDeportivoService.update(id, grupoDeportivo);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.grupoDeportivoService.remove(id);
  }
}
