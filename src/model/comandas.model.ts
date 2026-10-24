import { EntitySchema } from "typeorm"
import { Comandas } from "../entities/comandas"

export const comandasModel = new EntitySchema<Comandas>({
    name: "comandas",
    tableName: "comandas",
    target: Comandas,
    columns: {
        id: {
            type: String,
            primary: true
        },
        userId: {
            type: String
        },
        horaRecogida: {
            type: String
        },
        estado: {
            type: String // Enum handled as string in schema usually, or "enum" type
        },
        explicacionCancelacion: {
            type: String
        },
        propuestaAlternativa: {
            type: String
        }
    }
})
