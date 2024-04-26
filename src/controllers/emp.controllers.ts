import {Request, Response }from 'express'
import {EMPLEADOS} from '../entities/Empleados'

export const getEmpleados = async (req: Request, res: Response) => {
    try {
        //throw new Error('Error provocado');
        const emp = await EMPLEADOS.find({order: {idEmpleado: "ASC"}, where: [{activo: 'V'},{activo: 'C'}]})
        console.log(emp)
        return res.json(emp);
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
}
    
};