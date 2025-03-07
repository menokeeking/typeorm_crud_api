import { Empleados_ind1 } from "../interfaces/Empleados_ind1"

function apitointerface2( data: any): Empleados_ind1 {
    const emp1: Empleados_ind1 = {
        e_total: data[0].TOTEMP,
        e_c: data[0].EMPTIPO_C,
        e_b: data[0].EMPTIPO_B,
        e_t: data[0].EMPTIPO_T
    }
    return emp1;
}
export default apitointerface2;