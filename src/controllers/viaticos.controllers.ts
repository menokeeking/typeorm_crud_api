import { AppDataSource } from "../db"
import { Request, Response } from 'express'
import apitointerface from "../functions/viaticos_apitointerface";
import { DetalleViatico } from "../interfaces/DetalleViatico";
//import { DetalleViatico } from "../interfaces/DetalleViatico"

export const getViaticosdet = async (req: Request, res: Response) => {
  try {
    const {EJERCICIO,VIATICO,OFICINA} = req.params
    const data  = await AppDataSource.query(`select * from table (f_detalleviatico(${EJERCICIO},${VIATICO},${OFICINA}))`) 
    //console.log(data)
    const viat = apitointerface(data);
    
    return res.json(viat);

  } catch (error) {
    //console.error(error);
    if (error instanceof Error) {
      return res.status(505).json({ message: error.message });
    }
  }
};