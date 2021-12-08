import { EntityRepository, Repository } from "typeorm";
import { Especialista } from "../entities/Especialista";


@EntityRepository(Especialista)
export class EspecialistaRepository extends Repository<Especialista> {

}