import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Ejercicio } from "./Ejercicio";
import { Especialista } from "./Especialista";

@Entity('registro')
export class Registro extends BaseEntity {

    @PrimaryColumn()
    id_registro: number;

    @Column({ nullable: false })
    fecha_registro: Date;

    @OneToOne(() => Especialista, (especialista) => especialista.id_especialista)
    especialista: Especialista;

}
