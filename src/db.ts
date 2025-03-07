import { DataSource } from "typeorm";
import { USERCEA } from './entities/Usercea';
import { EMPLEADOS } from "./entities/Empleados";
import { VIATICOSDET } from "./entities/Viaticosdet";
import { VEH_IND1 } from "./entities/Vw_veh1";
import { EMP_IND1 } from "./entities/Vw_emp1";
import oracledb from 'oracledb';

// Inicializar el cliente de Oracle
oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_21_11' });
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// Configuración de TypeORM
export const AppDataSource = new DataSource({
    type: "oracle",
    host: "172.31.74.247",
    port: 1521,
    username: "cea", 
    password: "cea", 
    connectString: "sistem",
    synchronize: false,
    logging: true,
    entities: [USERCEA, EMPLEADOS, VEH_IND1, EMP_IND1]
});

// Crear un pool de conexiones con oracledb para procedimientos almacenados
export const initOracleDB = async () => {
    try {
        await oracledb.createPool({
            user: "cea",  // Usuario de Oracle
            password: "cea", // Contraseña de Oracle
            connectString: "172.31.74.247:1521/sistem", // Conexión a Oracle
            poolMin: 2,
            poolMax: 10,
            poolIncrement: 2
        });
        console.log("✅ Pool de conexiones a Oracle creado");
    } catch (error) {
        console.error("⛔ Error al conectar con Oracle:", error);
        process.exit(1); // Detener la aplicación si la conexión falla
    }
};

// Obtener una conexión del pool
export const getOracleConnection = async () => {
    return await oracledb.getConnection();
};

