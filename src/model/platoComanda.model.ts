import { EntitySchema } from "typeorm"
import { PlatoComanda } from "../entities/platoComanda"

export const platoComandaModel = new EntitySchema<PlatoComanda>({
    name: "platoComanda",
    tableName: "platoComanda",
    target: PlatoComanda,
    columns: {
        id: {
            type: String,
            primary: true
        },
        plato_id: {
            type: String
        },
        comanda_id: {
            type: String
        },
    }
})
