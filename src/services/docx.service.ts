import * as fs from "fs";
import * as path from "path";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

export const generateDocx = async (data: Record<string, any>): Promise<Buffer> => {
    const templatePath = path.join(__dirname, "../templates/plantilla.docx");
    //const outputPath = path.join(__dirname, "../output/salida.docx");

    // Leer la plantilla
    const templateContent = fs.readFileSync(templatePath, "binary");
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);

    // Insertar datos en la plantilla
   /*  doc.setData(data); */

    try {
        doc.render(data); // Rellena los placeholders
    } catch (error) {
        console.error("Error al renderizar el documento:", error);
        throw error;
    }

    // Generar el archivo resultante
    /* const buffer = doc.getZip().generate({ type: "nodebuffer" });
    fs.writeFileSync(outputPath, buffer); */

    //const buffer = doc.getZip().generate({ type: "nodebuffer" });
    return doc.getZip().generate({ type: "nodebuffer" });
    
};
