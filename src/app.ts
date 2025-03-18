import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/usercea.routes'
import empRoutes from './routes/emp.routes'
import viaticosRoutes from './routes/viaticos.routes'
import emp_g1Routes from './routes/emp_g1.routes'
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import path from "path"
import { getVeh_ind1 } from './controllers/veh_g2.controllers'
import veh_g2Routes from './routes/veh_g2.routes'
import foliarRoutes from './routes/foliar.routes'
import docxRoutes from './routes/docx.route'

const app = express()

app.use(cors({
    origin: '*', // Permite todas las IPs (no recomendado para producción)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));



const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CEA API Backup",
            description: "API de respaldo para sistemas web de CEA",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://172.31.74.11:5151"
            }
        ]
    },
    apis: [`${path.join(__dirname,"./routes/*.ts")}`],
};



app.use(express.json())

app.use(userRoutes, empRoutes,viaticosRoutes,emp_g1Routes, veh_g2Routes, foliarRoutes, docxRoutes)

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)))



export default app;