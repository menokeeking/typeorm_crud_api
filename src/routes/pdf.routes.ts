import { Router } from "express";
import { PDFController } from "../controllers/pdf.controllers";

/**
 * @swagger
 * /pdf:
 *   get:
 *     summary: Obtiene un archivo PDF como stream
 *     description: Devuelve un archivo PDF existente desde el servidor.
 *     responses:
 *       200:
 *         description: Archivo PDF devuelto con éxito.
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Archivo no encontrado.
 */
const router = Router();
const pdfController = new PDFController();

router.get("/pdf", (req, res) => pdfController.getPDF(req, res));

export default router;