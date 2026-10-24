import { EntitySchema } from "typeorm"
import { Evento } from "../entities/evento"

export const eventoModel = new EntitySchema<Evento>({
    name: "evento",
    tableName: "evento",
    target: Evento,
    columns: {
        id: {
            type: String,
            primary: true
        },
        nombre: {
            type: String
        },
        descripcion: {
            type: String
        },
        fechaInicio: {
            type: String
        },
        fechaFin: {
            type: String
        },
        barrio: {
            type: String
        }
    }
})
