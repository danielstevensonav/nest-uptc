
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { MusculoEjercicio } from "./MusculoEjercicio";

@Entity('parte_cuerpo')
export class ParteCuerpo extends BaseEntity {

    @PrimaryColumn()
    id_musculo: number;

    @Column({ nullable: true })
    dsc_musculo: string;

    @OneToMany(() => MusculoEjercicio, (musculoEjercicio) => musculoEjercicio.parteCuerpo)
    musculoEjercicio: MusculoEjercicio[];

    @OneToMany(() => ParteCuerpo, (parteCuerpo) => parteCuerpo.parteCuerpo)
    parteCuerpo: ParteCuerpo[];

    @ManyToOne(() => ParteCuerpo, (parteCuerpo) => parteCuerpo.parteCuerpo)
    @JoinColumn({ name: 'par_id_musculo', referencedColumnName: 'id_musculo'})
    parteCuerpoHijo: ParteCuerpo;
}
