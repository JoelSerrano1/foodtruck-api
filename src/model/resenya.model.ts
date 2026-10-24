import { EntitySchema } from "typeorm"
import { Resenya } from "../entities/resenya"

export const resenyaModel = new EntitySchema<Resenya>({
    name: "resenya",
    tableName: "resenya",
    target: Resenya,
    columns: {
        id: {
            type: String,
            primary: true
        },
        user_id: {
            type: String
        },
        valoracion: {
            type: Number
        },
        comentario: {
            type: String
        }
    }
})