import "reflect-metadata"
import app from "./app"
import { AppDataSource } from "./db"

async function main(){
    try {
        await AppDataSource.initialize();
        
        console.log("OracleDB Conectada a la BD : SISTEM");
        
        app.listen(5151);
        console.log('El servidor esta escuchando en el puerto', 5151);

    } catch(error){
        console.error(error);
    }
    

}

main();


