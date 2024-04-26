import { DetalleViatico } from "../interfaces/DetalleViatico"

function apitointerface( data: any): DetalleViatico {
    const viat: DetalleViatico = {
        noViatico: data[0].NOVIATICO || '',
        fecha: data[0].FECHA,
        noEmp: data[0].NOEMP,
        nombre: data[0].NOMBRE,
        puesto: data[0].PUESTO,
        depto: data[0].DEPTO,
        origen: data[0].ORIGEN,
        origenNom: data[0].ORIGEN_NOM,
        destino: data[0].DESTINO,
        destinoNom: data[0].DESTINO_NOM,
        comisionTitulo: data[0].COMISION_TITULO,
        comisionDetalle: data[0].COMISION_DETALLE,
        fechaSalida: data[0].FECHA_SALIDA,
        fechaRegreso: data[0].FECHA_REGRESO,
        dias: data[0].DIAS,
        estatus: data[0].ESTATUS,
        importe: data[0].IMPORTE
    }
    return viat;
}
export default apitointerface;