import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ParteCuerpo } from '../entities/ParteCuerpo';
import { ParteCuerpoService } from './parte-cuerpo.service';

@Controller('parte-cuerpo')
export class ParteCuerpoController {
  constructor(private readonly parteCuerpoService: ParteCuerpoService) {}

  @Post()
  create(@Body() parteCuerpo: ParteCuerpo) {
    return this.parteCuerpoService.create(parteCuerpo);
  }

  @Get('/list')
  findAll() {
    return this.parteCuerpoService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.parteCuerpoService.findOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() parteCuerpo: ParteCuerpo) {
    return this.parteCuerpoService.update(id, parteCuerpo);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.parteCuerpoService.remove(id);
  }
}
