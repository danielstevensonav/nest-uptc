import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { MusculoEjercicio } from "./MusculoEjercicio";
import { Rutina } from "./Rutina";
import { TipoEjercicio } from "./TipoEjercicio";

@Entity('ejercicio')
export class Ejercicio extends BaseEntity {

    @PrimaryColumn()
    id_ejercicio: number;

    @Column({ nullable: false })
    nombre_ejercicio: string;

    @Column({ nullable: false })
    dsc_ejercicio: string;

    @ManyToOne(() => TipoEjercicio, (tipoEjercicio) => tipoEjercicio.ejercicio)
    @JoinColumn({ name: 'id_tipo_ejercicio', referencedColumnName: 'id_tipo_ejercicio'})
    tipoEjercicio: TipoEjercicio;

    @OneToMany(() => MusculoEjercicio, (musculoEjercicio) => musculoEjercicio.parteCuerpo)
    musculoEjercicio: MusculoEjercicio[];

    @OneToMany(() => Rutina, (rutina) => rutina.ejercicio)
    rutina: Rutina[];
}
