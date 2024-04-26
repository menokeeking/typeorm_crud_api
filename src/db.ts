import { DataSource } from "typeorm";
import {USERCEA} from './entities/Usercea'
import { EMPLEADOS } from "./entities/Empleados";
import { VIATICOSDET } from "./entities/Viaticosdet";

const oracledb = require('oracledb');
oracledb.initOracleClient({libDir: 'C:\\oracle\\instantclient_21_11'});
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export const AppDataSource = new DataSource({
    type: "oracle",
    host: "172.31.74.247",
    port: 1521,
    username: "cea",
    password: "cea",
    connectString: "sistem",
    synchronize: false,
    logging: true,
    entities: [USERCEA,EMPLEADOS,VIATICOSDET]
})
