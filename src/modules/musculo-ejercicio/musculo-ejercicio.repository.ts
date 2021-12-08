import { EntityRepository, Repository } from "typeorm";
import { MusculoEjercicio } from "../entities/MusculoEjercicio";


@EntityRepository(MusculoEjercicio)
export class MusculoEjercicioRepository extends Repository<MusculoEjercicio> {

}