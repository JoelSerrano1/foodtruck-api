import { EntitySchema } from "typeorm"
import { PlatoMenu } from "../entities/platoMenu"

export const platoMenuModel = new EntitySchema<PlatoMenu>({
    name: "platoMenu",
    tableName: "platoMenu",
    target: PlatoMenu,
    columns: {
        id: {
            type: String,
            primary: true
        },
        plato_id: {
            type: String
        },
        menu_id: {
            type: String
        },
    }
})
