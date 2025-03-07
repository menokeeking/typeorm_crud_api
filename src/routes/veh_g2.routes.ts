import { Router } from 'express'
import { getVeh_ind1 } from '../controllers/veh_g2.controllers';

const router = Router ()

/**
* @swagger
* components:
*  schemas:
*      Vehiculos_xunidad:
*          type: object
*          properties: 
*              ano:
*                  type: number
*                  description: Modelo del Vehiculo
*              cantidad:
*                  type: number
*                  description: Total de Unidades x modelo
* 
*          example:
*               ano: 0
*               cantidad: 0
* 
* */

/**
 * @swagger
 * /vehiculos_xunidad:
 *  get:
 *      summary: Obtiene totales de unidades por modelo
 *      tags: [Vehiculos_xunidad]
 *      responses:
 *          200: 
 *              description: Se obtuvo datos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Vehiculos_xunidad' 
 *          404:
 *              description: No se encontro info                  
 */
router.get('/vehiculos_xunidad', getVeh_ind1);

export default router