import { Request, Response } from 'express';
import { getOracleConnection } from "../db";
import oracledb from 'oracledb';

export const callActualizarOficio = async (req: Request, res: Response) => {
    let connection: oracledb.Connection | null = null;

    try {
        const { EJERCICIO, EOR, FOLIO, EMPLEADO } = req.body;

        // Obtener conexión desde el pool
        connection = await getOracleConnection();

        // Ejecutar el procedimiento almacenado
        const result = await connection.execute(
            `BEGIN SP_ACTUALIZAR_OFICIO(:P_EJERCICIO, :P_EOR, :P_FOLIO, :P_EMPLEADO, :P_FOLIO_NUEVO, :P_MENSAJE); END;`,
            {
                P_EJERCICIO: EJERCICIO,
                P_EOR: EOR,
                P_FOLIO: FOLIO,
                P_EMPLEADO: EMPLEADO,
                P_FOLIO_NUEVO: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
                P_MENSAJE: { dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 200 }
            }
        );

        // Asegurar que outBinds tenga el tipo correcto
        const outBinds = result.outBinds as { P_FOLIO_NUEVO: number; P_MENSAJE: string };

        return res.json({
            FOLIO_NUEVO: outBinds.P_FOLIO_NUEVO || 0,
            MENSAJE: outBinds.P_MENSAJE || "Error desconocido"
        });

    } catch (error) {
        console.error("⛔ Error en callActualizarOficio:", error);
        return res.status(500).json({ message: error instanceof Error ? error.message : "Error desconocido" });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error("⛔ Error cerrando conexión:", err);
            }
        }
    }
};
