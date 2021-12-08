import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Especialista } from '../entities/Especialista';
import { EspecialistaService } from './especialista.service';

@Controller('especialista')
export class EspecialistaController {
  constructor(private readonly especialistaService: EspecialistaService) {}

  @Post()
  create(@Body() especialista: Especialista) {
    return this.especialistaService.create(especialista);
  }

  @Get('/list')
  findAll() {
    return this.especialistaService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.especialistaService.findOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() especialista: Especialista) {
    return this.especialistaService.update(id, especialista);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.especialistaService.remove(id);
  }
}
