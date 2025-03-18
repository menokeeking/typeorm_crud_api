import { Request, Response } from "express";
import { generateDocx } from "../services/docx.service";

export const generateDocxController = async (req: Request, res: Response) => {
    try {
        const data = req.body; // Recibe los datos del cliente
        const buffer = await generateDocx(data); // Genera el archivo y obtiene el buffer
        res.set({
            "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "Content-Disposition": "attachment; filename=archivo_generado.docx",
        });

        // Enviar el buffer al cliente
        res.send(buffer);
    } catch (error) {
        console.error("Error generando el documento:", error);
        res.status(500).send("Hubo un problema generando el documento");
    }
};
