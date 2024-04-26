import { Router } from 'express'
import { getEmpleados } from '../controllers/emp.controllers'

const router = Router()

/**
* @swagger
* components:
*  schemas:
*      Empleados:
*          type: object
*          properties: 
*              EMPLEADO:
*                  type: number
*                  description: Número de Empleado
*              NOMBRE:
*                  type: string
*                  description: Primer nombre del Empleado
*              PATERNO:
*                  type: string
*                  description: Apellido del Empleado
*              MATERNO:
*                  type: string
*                  description: Segundo Apellido del Empleado
*              NIVEL:
*                  type: number
*                  description: Nivel al que pertenece el empleado
*              DEPTO:
*                  type: number
*                  description: Departamento al que pertenece el empleado
*              OBRA:
*                  type: number
*                  description: No. de Obra al que pertenece el empleado (solo los de inversion)
*              DEPTOPPTO:
*                  type: number
*                  description: Departamento Presupuestal al que pertenece el empleado
*              DEPTOCOMI:
*                  type: number
*                  description: Departamento al que se comisiono el empleado
*              MUNICIPIO:
*                  type: number
*                  description: Ciudad al que pertenece el empleado
*              ACTIVO:
*                  type: number
*                  description: Bandera si el empleado esta activo
*          required:
*              - EMPLEADO
*              - NOMBRE
*              - PATERNO
*              - NIVEL
*              - DEPTO
*          example:
*               EMPLEADO: 0
*               NOMBRE: Nombre(s)
*               PATERNO: Apellido1
*               MATERNO: Apellido2
*               NIVEL: 0
*               DEPTO: 0
* 
* */

// router.post('/users', createUser);

/**
 * @swagger
 * /empleados:
 *  get:
 *      summary: Obtiene todos los usuarios
 *      tags: [Empleados]
 *      responses:
 *          200: 
 *              description: Se obtuvieron todos los empleados
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Empleados'                    
 */
router.get('/empleados', getEmpleados);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);
// router.get('/users/:id', getUser);

export default router