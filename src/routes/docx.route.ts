import { Router } from "express";
import { generateDocxController } from "../controllers/docx.controllers";

const router = Router();

/**
 * @swagger
 * /generate-docx:
 *   post:
 *     summary: Genera un archivo DOCX basado en una plantilla
 *     description: Recibe parámetros en JSON para rellenar una plantilla DOCX y descargar el archivo generado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Manuel"
 *               fecha:
 *                 type: string
 *                 example: "15 de marzo de 2025"
 *               proyecto:
 *                 type: string
 *                 example: "plantilla.docx"
 *     responses:
 *       200:
 *         description: Archivo DOCX generado y descargado correctamente.
 *         content:
 *           application/vnd.openxmlformats-officedocument.wordprocessingml.document:
 *             schema:
 *               type: string
 *               format: binary
 *       500:
 *         description: Error al generar el archivo DOCX.
 */
router.post("/generate-docx", generateDocxController);

export default router;