import { EntitySchema } from "typeorm"
import { Plato } from "../entities/plato"

export const platoModel = new EntitySchema<Plato>({
    name: "plato",
    tableName: "plato",
    target: Plato,
    columns: {
        id: {
            type: String,
            primary: true
        },
        nombre: {
            type: String
        },
        precio: {
            type: Number
        },
        disponible: {
            type: Boolean
        }
    }
})
