import {
    ViewColumn,
    ViewEntity
} from 'typeorm'

@ViewEntity(({name:'VW_EMP_GRAPH1',schema:'CEA'}))
export class EMP_IND1 {

    @ViewColumn({name: "TOTEMP"})
    e_total: number;

    @ViewColumn({name: "EMPTIPO_C"})
    e_c: number;

    @ViewColumn({name: "EMPTIPO_B"})
    e_b: number;

    @ViewColumn({name: "EMPTIPO_T"})
    e_t: number;

}