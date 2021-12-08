import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoEjercicioModule } from './modules/tipo-ejercicio/tipo-ejercicio.module';
import { EjercicioModule } from './modules/ejercicio/ejercicio.module';
import { MusculoEjercicioModule } from './modules/musculo-ejercicio/musculo-ejercicio.module';
import { ParteCuerpoModule } from './modules/parte-cuerpo/parte-cuerpo.module';
import { EspecialistaModule } from './modules/especialista/especialista.module';
import { RegistroModule } from './modules/registro/registro.module';
import { GrupoDeportivoModule } from './modules/grupo-deportivo/grupo-deportivo.module';
import { RutinaModule } from './modules/rutina/rutina.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TipoEjercicioModule,
    EjercicioModule,
    MusculoEjercicioModule,
    ParteCuerpoModule,
    EspecialistaModule,
    RegistroModule,
    GrupoDeportivoModule,
    RutinaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
