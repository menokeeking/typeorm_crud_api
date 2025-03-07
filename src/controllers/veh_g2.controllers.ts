import { AppDataSource } from "../db"
import { Request, Response } from 'express'
import { VEH_IND1 } from "../entities/Vw_veh1";

export const getVeh_ind1 = async (req: Request, res: Response) => {
  try {

    const vehRepo = AppDataSource.getRepository(VEH_IND1); 
    const data = await vehRepo.find()
    //const data = await VEH_IND1.find()
    
    return res.json(data);

  } catch (error) {
    if (error instanceof Error) {
      return res.status(505).json({ message: error.message });
    }
  }
};