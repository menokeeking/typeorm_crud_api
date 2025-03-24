import { Request, Response } from "express";
import { generateDocx } from "../services/docx.service";


export const generateDocxController = async (req: Request, res: Response) => {
    try {
        const data = req.body; // Recibir parámetros en JSON
        console.log(data)
        const docBuffer = await generateDocx(data);
        console.log("Docbuffer", docBuffer.length)

        res.setHeader("Content-Disposition", "attachment; filename=documento.docx");
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        res.setHeader("Content-Length", docBuffer.length); 
        res.end(docBuffer);
        
    } catch (error) {
        console.error("Error generando el documento:", error);
        res.status(500).send("Hubo un problema generando el documento");
    }
};
