import { EntityRepository, Repository } from "typeorm";
import { TipoEjercicio } from "../entities/TipoEjercicio";


@EntityRepository(TipoEjercicio)
export class TipoEjercicioRepository extends Repository<TipoEjercicio> {

}