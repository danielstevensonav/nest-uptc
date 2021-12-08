import { EntityRepository, Repository } from "typeorm";
import { Ejercicio } from "../entities/Ejercicio";


@EntityRepository(Ejercicio)
export class EjercicioRepository extends Repository<Ejercicio> {

}