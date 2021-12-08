import { Module } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { RegistroController } from './registro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroRepository } from './registro.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroRepository])],
  controllers: [RegistroController],
  providers: [RegistroService]
})
export class RegistroModule {}
