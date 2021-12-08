import { EntityRepository, Repository } from "typeorm";
import { GrupoDeportivo } from "../entities/GrupoDeportivo";



@EntityRepository(GrupoDeportivo)
export class GrupoDeportivoRepository extends Repository<GrupoDeportivo> {

}