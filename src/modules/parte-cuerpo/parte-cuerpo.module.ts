import { Module } from '@nestjs/common';
import { ParteCuerpoService } from './parte-cuerpo.service';
import { ParteCuerpoController } from './parte-cuerpo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParteCuerpoRepository } from './parte-cuerpo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ParteCuerpoRepository])],
  controllers: [ParteCuerpoController],
  providers: [ParteCuerpoService]
})
export class ParteCuerpoModule {}
