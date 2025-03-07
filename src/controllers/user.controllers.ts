import {Request, Response }from 'express'
import {USERCEA} from '../entities/Usercea'

export const createUser = async (req: Request, res: Response) => {
    try {
        const { ID, FIRSTNAME, LASTNAME} = req.body;
        
        /* const usercea = new USERCEA()
        usercea.ID = ID;
        usercea.FIRSTNAME = FIRSTNAME;
        usercea.LASTNAME = LASTNAME;
        usercea.ACTIVE = 1;

        await usercea.save();

        return res.json(usercea); */
        console.log(req.body);
        return res.json("Hola users");
        
        //res.send('hello world')
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }   
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        //throw new Error('Error provocado');
        const users = await USERCEA.find({order: {ID: "ASC"}})
        return res.json(users);
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
}
    
};

export const updateUser = async(req: Request, res: Response) => {
    try {
        //const {firstname, lastname} = req.body
        const {id} = req.params;
        const users = await USERCEA.find({where: {ID: parseInt(id)}});

        if (!users[0]) return res.status(404).json({message: 'El usuario no existe'})

        //users[0].FIRSTNAME = firstname;
        //users[0].LASTNAME = lastname;
        //await users[0].save();

        await USERCEA.update({ID: parseInt(id)}, req.body);
        
        //return res.json('Recibido')
        return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
    
}

export const deleteUser = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const result = await USERCEA.delete({ID: parseInt(id)});

        if (result.affected === 0) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
    
}

export const getUser = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user = await USERCEA.find({where: {ID: parseInt(id)}});

        if (!user[0]) return res.status(404).json({message: 'El usuario no existe'})

        return res.json(user);
        
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}