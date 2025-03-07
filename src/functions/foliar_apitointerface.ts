// Obtiene el folio de la respuesta del foliado de un viático
import { Foliar_respuesta } from "../interfaces/Foliar_respuesta";

function apitointerface( data: any): Foliar_respuesta {
    const fresp: Foliar_respuesta = {
        folio: data[0].FOLIO || 0,
        mensaje: data[0].MENSAJE || '',
    }
    return fresp;
}
export default apitointerface;