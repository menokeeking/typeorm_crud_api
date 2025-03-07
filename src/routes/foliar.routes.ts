import { Router } from 'express'
import {callActualizarOficio} from '../controllers/foliar.controllers'

const router = Router ()

/**
 * @swagger
 * components:
 *  schemas:
 *      FoliarOficio:
 *          type: object
 *          properties: 
 *              EJERCICIO:
 *                  type: number
 *                  description: El periodo del Documento
 *              EOR:
 *                  type: number
 *                  description: Expedido, Recibido o Xexpedir
 *              FOLIO:
 *                  type: number
 *                  description: Numero de Folio
 *              EMPLEADO:
 *                  type: number
 *                  description: Bandera si el usuario esta activo
 *              FOLIO_NUEVO:
 *                  type: number
 *                  description: Bandera si el usuario esta activo
 *              MENSAJE:
 *                  type: string
 *                  description: Bandera si el usuario esta activo
 *          required:
 *              - EJERCICIO
 *              - EOR
 *              - FOLIO
 *              - EMPLEADO
 *              - FOLIO_NUEVO
 *              - MENSAJE
 *          example:
 *              EJERCICIO: 2025
 *              EOR: 3
 *              FOLIO: 4
 *              EMPLEADO: 7154
 *              FOLIO_NUEVO: 0
 *              MENSAJE: ""
 */

/**
 * @swagger
 * /actualizar-oficio:
 *  post:
 *      summary: Crear nuevos usuarios
 *      tags: [FoliarOficio]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/FoliarOficio'
 *      responses:
 *          200:
 *              description: El nuevo usuario fue creado!
 *                      
 */

router.post('/actualizar-oficio', callActualizarOficio);
//router.post('/foliar/:EJERCICIO/:EOR/:FOLIO/:EMPLEADO', callActualizarOficio);

export default router