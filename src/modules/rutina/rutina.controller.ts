import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Rutina } from '../entities/Rutina';
import { RutinaService } from './rutina.service';

@Controller('rutina')
export class RutinaController {
  constructor(private readonly rutinaService: RutinaService) {}

  @Post()
  create(@Body() rutina: Rutina) {
    return this.rutinaService.create(rutina);
  }

  @Get('/list')
  findAll() {
    return this.rutinaService.findAll();
  }

  @Delete('/:id')
  remove(@Body() rutina: Rutina) {
    return this.rutinaService.remove(rutina);
  }
}
