import { DataSource } from "typeorm";
import {USERCEA} from './entities/Usercea'
import { EMPLEADOS } from "./entities/Empleados";
import { VIATICOSDET } from "./entities/Viaticosdet";
import { VEH_IND1 } from "./entities/Vw_veh1";
import { EMP_IND1 } from "./entities/Vw_emp1";

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
    entities: [USERCEA,EMPLEADOS,VIATICOSDET, VEH_IND1, EMP_IND1]
})
