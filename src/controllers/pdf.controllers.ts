import { Request, Response } from "express";
import { PDFService } from "../services/pdf.service";

export class PDFController {
    private pdfService: PDFService;

    constructor() {
        this.pdfService = new PDFService();
    }

    public getPDF(req: Request, res: Response): void {
        this.pdfService.getPDF(res);
    }
}