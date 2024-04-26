"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const oracledb = require('oracledb');
oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_21_11' });
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "oracle",
    host: "172.31.74.247",
    //port: 1521,
    username: "cea",
    password: "cea",
    connectString: "sistemdes",
    //synchronize: true,
    logging: true,
    entities: []
});
