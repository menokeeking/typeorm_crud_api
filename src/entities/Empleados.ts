import {
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    BaseEntity
} from 'typeorm'

@Entity({name:'EMPLEADOS',schema:'CEA'})
export class EMPLEADOS extends BaseEntity{

    @PrimaryGeneratedColumn({name: "EMPLEADO"})
    idEmpleado: number;

    @Column({name: "NOMBRE"})
    nombre: string;

    @Column({name: "PATERNO"})
    paterno: string;

    @Column({name: "MATERNO"})
    materno: string;

    @Column({name: "NIVEL"})
    nivel: number;

    @Column({name: "DEPTO"})
    depto: number;

    @Column({name: "OBRA"})
    obra: number;

    @Column({name: "DEPTOPPTO"})
    deptoPpto: number;

    @Column({name: "DEPTOCOMI"})
    deptoComi: number;

    @Column({name: "MUNICIPIO"})
    municipio: number;

    @Column({name: "ACTIVO"})
    activo: string;


}