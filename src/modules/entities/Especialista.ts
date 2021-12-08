
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { GrupoDeportivo } from "./GrupoDeportivo";
import { Rutina } from "./Rutina";

@Entity('especialista')
export class Especialista extends BaseEntity {

    @PrimaryColumn()
    id_especialista: number;

    @Column({ nullable: true })
    nombre: string;

    @Column({ nullable: true })
    fecha_nacimiento: Date;

    @Column({ nullable: true })
    tarjeta_profesional: string;

    @OneToMany(() => GrupoDeportivo, (grupoDeportivo) => grupoDeportivo.especialista)
    especialista: GrupoDeportivo[];

    @OneToMany(() => GrupoDeportivo, (grupoDeportivo) => grupoDeportivo.especialista2)
    amigo: GrupoDeportivo[];

    @OneToMany(() => Rutina, (rutina) => rutina.especialista)
    rutina: Rutina[];

}
