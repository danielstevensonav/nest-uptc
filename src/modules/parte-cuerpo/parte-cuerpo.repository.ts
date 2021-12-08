import { EntityRepository, Repository } from "typeorm";
import { ParteCuerpo } from "../entities/ParteCuerpo";


@EntityRepository(ParteCuerpo)
export class ParteCuerpoRepository extends Repository<ParteCuerpo> {

}