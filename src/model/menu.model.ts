import { EntitySchema } from "typeorm"
import { Menu } from "../entities/menu"

export const menuModel = new EntitySchema<Menu>({
    name: "menu",
    tableName: "menu",
    target: Menu,
    columns: {
        id: {
            type: String,
            primary: true
        },
        foodtruckId: {
            type: String
        },
        nombre: {
            type: String
        },
        descripcion: {
            type: String
        }
    }
})
