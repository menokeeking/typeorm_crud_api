import fs from "fs";
import path from "path";
import { Response } from "express";
import { ok } from "assert";

export class PDFService {
    private pdfPath = "C:/Users/mreyes/Documents/Sistemas REACT/Typeomr-crud-restapi/src/var/documents/archivo.pdf"; // Ruta del PDF

    public getPDF(res: Response): void {
        // Verifica si el archivo existe
        if (!fs.existsSync(this.pdfPath)) {
            res.status(404).json({ message: "Archivo no encontrado" });
            return;
        }

        // Configura los encabezados
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", 'inline; filename="archivo.pdf"');

        // Enviar el archivo como stream
        const fileStream = fs.createReadStream(this.pdfPath);
        fileStream.pipe(res);
        
    }
}