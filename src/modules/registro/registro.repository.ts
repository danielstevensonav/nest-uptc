import { EntityRepository, Repository } from "typeorm";
import { Registro } from "../entities/Registro";


@EntityRepository(Registro)
export class RegistroRepository extends Repository<Registro> {

}