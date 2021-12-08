import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Registro } from '../entities/Registro';
import { RegistroService } from './registro.service';

@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Post()
  create(@Body() registro: Registro) {
    return this.registroService.create(registro);
  }

  @Get('/list')
  findAll() {
    return this.registroService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.registroService.findOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() registro: Registro) {
    return this.registroService.update(id, registro);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.registroService.remove(id);
  }
}
