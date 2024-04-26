import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/usercea.routes'
import empRoutes from './routes/emp.routes'
import viaticosRoutes from './routes/viaticos.routes'
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import path from "path"

const app = express()
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node Oracle API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:5151"
            }
        ]
    },
    apis: [`${path.join(__dirname,"./routes/*.ts")}`],
};

app.use(morgan('dev'))
app.use(cors());
app.use(express.json())

app.use(userRoutes, empRoutes,viaticosRoutes)

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)))

export default app;