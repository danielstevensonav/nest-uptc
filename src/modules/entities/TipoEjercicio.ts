import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Ejercicio } from "./Ejercicio";

@Entity('tipo_ejercicio')
export class TipoEjercicio extends BaseEntity {

    @PrimaryColumn()
    id_tipo_ejercicio: number;

    @Column({ nullable: false })
    dsc_tipo_ejercicio: string;

    @OneToMany(() => Ejercicio, (ejercicio) => ejercicio.tipoEjercicio)
    ejercicio: Ejercicio[];
}
