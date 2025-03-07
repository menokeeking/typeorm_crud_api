import { Empleados_ind1 } from "../interfaces/Empleados_ind1"
import { Vehiculos_ind2 } from "../interfaces/Vehiculos_ind2";

function apitointerface3( data: any): Vehiculos_ind2 {
    const emp1: Vehiculos_ind2 = {
        ano: data.ANO,
        cantidad: data.CANTIDAD,
    }
    return emp1;
}
export default apitointerface3;