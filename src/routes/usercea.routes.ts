import {Router} from 'express'
import {createUser, deleteUser, getUser, getUsers, updateUser}from '../controllers/user.controllers'

const router = Router ()

/**
 * @swagger
 * components:
 *  schemas:
 *      Usercea:
 *          type: object
 *          properties: 
 *              ID:
 *                  type: number
 *                  description: El identificador del Usuario
 *              FIRSTNAME:
 *                  type: string
 *                  description: Primer nombre del Ususario
 *              LASTNAME:
 *                  type: string
 *                  description: Apellido del Usuario
 *              ACTIVE:
 *                  type: number
 *                  description: Bandera si el usuario esta activo
 *              FCREACION:
 *                  type: date
 *                  description: Fecha de Creacion
 *              FMODIFICADO:
 *                  type: date
 *                  description: Fecha de Modificacion
 *                  nullable: true
 *          required:
 *              - ID
 *              - FIRSTNAME
 *              - LASTNAME
 *          example:
 *              ID: 0
 *              FIRSTNAME: Nombre(s)
 *              LASTNAME: Apellido
 */

/**
 * @swagger
 * /users:
 *  post:
 *      summary: Crear nuevos usuarios
 *      tags: [Usercea]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Usercea'
 *      responses:
 *          200:
 *              description: El nuevo usuario fue creado!
 *                      
 */
router.post('/users', createUser);

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Obtiene todos los usuarios
 *      tags: [Usercea]
 *      responses:
 *          200: 
 *              description: Se obtuvieron todos los usuarios
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Usercea'                    
 */
router.get('/users', getUsers);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: Obtiene un usuario por parametro
 *      tags: [Usercea]
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Captar el numero de Empleado
 *      responses:
 *          200: 
 *              description: Se obtuvieron todos los usuarios
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Usercea' 
 *          404:
 *              description: No se encontro el usuario                   
 */
router.get('/users/:id', getUser);

/**
 * @swagger
 * /users/{id}:
 *  put:
 *      summary: Actualizar usuario 
 *      tags: [Usercea]
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Captar el numero de Empleado
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Usercea'
 *      responses:
 *          204: 
 *              description: El usuario ha sido actualizado
 *          404:
 *              description: No se encontro el usuario                   
 */
router.put('/users/:id', updateUser);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: Eliminar un usuario por parametro
 *      tags: [Usercea]
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Captar el numero de Empleado
 *      responses:
 *          204: 
 *              description: El usuario ha sido removido
 *          404:
 *              description: No se encontro el usuario                   
 */
router.delete('/users/:id', deleteUser);

export default router