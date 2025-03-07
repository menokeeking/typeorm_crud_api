import { AppDataSource } from "../db"
import { Request, Response } from 'express'
import apitointerface2 from "../functions/emp_apitointerface";
import { EMP_IND1 } from "../entities/Vw_emp1";


export const getEmp_ind1 = async (req: Request, res: Response) => {
  try {
    //const {EJERCICIO,VIATICO,OFICINA} = req.params
    //const data  = await AppDataSource.query('SELECT T.TOTEMP,T.EMPTIPO_C,T.EMPTIPO_B,T.EMPTIPO_T FROM CEA.VW_EMP_GRAPH1 T') 
    //const emp1= apitointerface2(data);
    const empRepo = AppDataSource.getRepository(EMP_IND1); 
    const data = await empRepo.find()

    //return res.json(emp1);
    return res.json(data[0]);

  } catch (error) {
    //console.error(error);
    if (error instanceof Error) {
      return res.status(505).json({ message: error.message });
    }
  }
};