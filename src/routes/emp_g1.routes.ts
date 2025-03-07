import { Router } from 'express'
import { getEmp_ind1 } from '../controllers/emp_g1.controllers'

const router = Router ()

/**
* @swagger
* components:
*  schemas:
*      Empleados_totales:
*          type: object
*          properties: 
*              e_total:
*                  type: number
*                  description: Total de Empleados
*              e_c:
*                  type: number
*                  description: Total de Empleados de Confianza
*              e_b:
*                  type: number
*                  description: Total de Empleados de Base
*              e_t:
*                  type: number
*                  description: Total de Empleados de Contrato
* 
*          example:
*               e_total: 0
*               e_c: 0
*               e_b: 0
*               e_t: 0
* 
* */

/**
 * @swagger
 * /empleados_totales:
 *  get:
 *      summary: Obtiene totales por empleado
 *      tags: [Empleados_totales]
 *      responses:
 *          200: 
 *              description: Se obtuvo datos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Empleados_totales' 
 *          404:
 *              description: No se encontro info                  
 */
router.get('/empleados_totales', getEmp_ind1);

export default router