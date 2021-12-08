import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, Timestamp } from "typeorm";
import { Ejercicio } from "./Ejercicio";
import { Especialista } from "./Especialista";
import { ParteCuerpo } from "./ParteCuerpo";

@Entity('rutina')
export class Rutina extends BaseEntity {

    @ManyToOne(() => Especialista, (especialista) => especialista.id_especialista, {
        eager: false,
        primary: true,
    })
    @JoinColumn({ name: 'id_especialista', referencedColumnName: 'id_especialista' })
    especialista: Especialista;

    @Column({ nullable: true })
    dia: string;

    @ManyToOne(() => Ejercicio, (ejercicio) => ejercicio.id_ejercicio, {
        eager: false,
        primary: true,
    })
    @JoinColumn({ name: 'id_ejercicio', referencedColumnName: 'id_ejercicio' })
    ejercicio: Ejercicio;

    @Column({ nullable: true })
    repeticiones: number;

    @Column({ type: 'timestamptz' })
    duracion: Date;
    
}
