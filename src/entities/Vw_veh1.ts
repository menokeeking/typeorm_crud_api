import {
    ViewColumn,
    ViewEntity
} from 'typeorm'

@ViewEntity(({name:'VW_EMP_GRAPH2',schema:'CEA'}))
export class VEH_IND1{ 

    @ViewColumn({name: "ANO"})
    ano: number;

    @ViewColumn({name: "CANTIDAD"})
    cantidad: number;
}