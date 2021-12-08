import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Ejercicio } from "./Ejercicio";
import { ParteCuerpo } from "./ParteCuerpo";
import { TipoEjercicio } from "./TipoEjercicio";

@Entity('musculo_ejercicio')
export class MusculoEjercicio extends BaseEntity {

    @ManyToOne(() => Ejercicio, (ejercicio) => ejercicio.id_ejercicio, {
        eager: false,
        primary: true,
    })
    @JoinColumn({ name: 'id_ejercicio', referencedColumnName: 'id_ejercicio' })
    ejercicio: Ejercicio;

    @ManyToOne(() => ParteCuerpo, (parteCuerpo) => parteCuerpo.id_musculo, {
        eager: false,
        primary: true,
    })
    @JoinColumn({ name: 'id_musculo', referencedColumnName: 'id_musculo' })
    parteCuerpo: ParteCuerpo;
    
}
