import { Router } from 'express'
import { getViaticosdet } from '../controllers/viaticos.controllers'

const router = Router ()

/**
* @swagger
* components:
*  schemas:
*      ViaticoDetalle:
*          type: object
*          properties: 
*              noViatico:
*                  type: string
*                  description: Número de viático 
*              fecha:
*                  type: string
*                  description: Fecha de elaboración
*              noEmp:
*                  type: number
*                  description: Número de Empleado
*              puesto:
*                  type: string
*                  description: Puesto del Empleado
*              origen:
*                  type: number
*                  description: Valor en el catalogo de ciudades que pertenece ciudad de origen
*              origenNom:
*                  type: string
*                  description: Nombre de la ciudad de origen
*              destino:
*                  type: number
*                  description: Valor en el catalogo de ciudades que pertenece ciudad de destino
*              destinoNom:
*                  type: string
*                  description: Nombre de la ciudad de destino
*              comisionTitulo:
*                  type: string
*                  description: Titulo de la Comision del viatico
*              comisionDetalle:
*                  type: number
*                  description: Descripcion de la Comision del viatico
*              fechaSalida:
*                  type: string
*                  description: Fecha de Salida
*              fechaRegreso:
*                  type: string
*                  description: Fecha de Salida
*              dias:
*                  type: number
*                  description: Número de dias de la comision
*              estatus:
*                  type: number
*                  descripcion: 1 creado, 2 registrado CH, 3 reg CONTA, 4 Pagado, 9 cancelado
*              importe:
*                  type: number
*                  descripcion: Importe del dinero recibido para la comision
* 
*          example:
*               noViatico: "string"
*               fecha: "2024-04-26T16:03:23.609Z"
*               noEmp: 0
*               nombre: "string"
*               puesto: "string"
*               depto: "string"
*               origen: 0
*               origenNom: "string"
*               destino: 0
*               destinoNom: "string"
*               comisionTitulo: "string"
*               comisionDetalle: "string"
*               fechaSalida: "2024-04-26T16:03:23.609Z"
*               fechaRegreso: "2024-04-26T16:03:23.609Z"
*               dias: 0
*               estatus: 0
*               importe: 0
* 
* */

/**
 * @swagger
 * /viaticos/{EJERCICIO}/{VIATICO}/{OFICINA}:
 *  get:
 *      summary: Obtiene un usuario por parametro
 *      tags: [ViaticoDetalle]
 *      parameters:
 *       - in: path
 *         name: EJERCICIO
 *         schema:
 *           type: number
 *         required: true
 *         description: Captar el numero de Empleado
 *       - in: path
 *         name: VIATICO
 *         schema:
 *           type: number
 *         required: true
 *         description: Captar el numero de Empleado
 *       - in: path
 *         name: OFICINA
 *         schema:
 *           type: number
 *         required: true
 *         description: Captar el numero de Empleado
 *      responses:
 *          200: 
 *              description: Se obtuvo datos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/ViaticoDetalle' 
 *          404:
 *              description: No se encontro el usuario                   
 */
router.get('/viaticos/:EJERCICIO/:VIATICO/:OFICINA', getViaticosdet);

export default router