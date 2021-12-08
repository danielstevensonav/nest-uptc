
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Especialista } from "./Especialista";

@Entity('grupo_deportivo')
export class GrupoDeportivo extends BaseEntity {

    @PrimaryColumn()
    csc_intentos: number;

    @Column({ nullable: true })
    intento: number;

    @ManyToOne(() => Especialista, (especialista) => especialista.especialista)
    @JoinColumn({ name: 'id_especialista', referencedColumnName: 'id_especialista'})
    especialista: Especialista;

    @ManyToOne(() => Especialista, (especialista) => especialista.amigo)
    @JoinColumn({ name: 'esp_id_especialista', referencedColumnName: 'id_especialista'})
    especialista2: Especialista;

}
