import { AppDataSource } from "../db"
import { Request, Response } from 'express'
import apitointerface from "../functions/foliar_apitointerface";
import oracledb from 'oracledb';

export const callActualizarOficio = async (req: Request, res: Response) => {
  try {
    const { EJERCICIO, EOR, FOLIO, EMPLEADO, FOLIO_NUEVO, MENSAJE } = req.body;
   
    //console.log(req.body)

    const result = await AppDataSource.query(
      `BEGIN SP_ACTUALIZAR_OFICIO(:${EJERCICIO},:${EOR},:${FOLIO},:${EMPLEADO},${FOLIO_NUEVO},${MENSAJE} ); END;`,
      [
        { EJERCICIO: EJERCICIO },
        { EOR: EOR },
        { FOLIO: FOLIO },
        { EMPLEADO: EMPLEADO },
        { FOLIO_NUEVO: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER} },
        { MENSAJE: { dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 200} }
      ] 
    );
    //console.log(result)
    const mensaje = result.outBinds.FOLIO_NUEVO;
    const codigo = result.outBinds.MENSAJE;

    return { mensaje, codigo };

  } catch (error) {
    //console.error(error);
    if (error instanceof Error) {
      return res.status(505).json({ message: error.message });
    }
  }
};