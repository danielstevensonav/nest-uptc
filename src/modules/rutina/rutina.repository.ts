import { EntityRepository, Repository } from "typeorm";
import { Rutina } from "../entities/Rutina";


@EntityRepository(Rutina)
export class RutinaRepository extends Repository<Rutina> {

}