import {
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    BaseEntity
} from 'typeorm'

@Entity({name:'USERCEA',schema:'CEA'})
export class USERCEA extends BaseEntity{

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    FIRSTNAME: string;

    @Column()
    LASTNAME: string;

    @Column()
    ACTIVE: number;

    @CreateDateColumn()
    FCREACION: Date;

    @UpdateDateColumn()
    FMODIFICADO: Date;


}