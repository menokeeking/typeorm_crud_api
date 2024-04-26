import {
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    BaseEntity,
    ViewColumn,
    ViewEntity
} from 'typeorm'

@ViewEntity(({name:'GET_DETALLEVIATICO',schema:'CEA'}))
export class VIATICOSDET {

    @ViewColumn({name: "NOVIATICO"})
    noViatico: string;

    @ViewColumn({name: "FECHA"})
    date: string;

    @ViewColumn({name: "NOMBRE"})
    nombre: string;

    @ViewColumn({name: "PUESTO"})
    puesto: string;

    @ViewColumn({name: "DEPTO"})
    depto: string;

    @ViewColumn({name: "ORIGEN"})
    origen: number;

    @ViewColumn({name: "ORIGEN_NOM"})
    origenNom: string;

    @ViewColumn({name: "DESTINO"})
    destino: number;

    @ViewColumn({name: "DESTINO_NOM"})
    destinoNom: string;

    @ViewColumn({name: "COMISION_TITULO"})
    comisionTitulo: string;

    @ViewColumn({name: "COMISION_DETALLE"})
    comisionDetalle: string;

    @ViewColumn({name: "FECHA_SALIDA"})
    fechaSalida: string;

    @ViewColumn({name: "FECHA_REGRESO"})
    fechaRegreso: string;

    @ViewColumn({name: "DIAS"})
    dias: number;

    @ViewColumn({name: "ESTATUS"})
    estatus: number;

    @ViewColumn({name: "IMPORTE"})
    importe: number;
}