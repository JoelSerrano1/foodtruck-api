import { EntitySchema } from "typeorm"
import { Foodtruck } from "../entities/foodtruck"

export const foodtruckModel = new EntitySchema<Foodtruck>({
    name: "foodtruck",
    tableName: "foodtruck",
    target: Foodtruck,
    columns: {
        id: {
            type: String,
            primary: true
        },
        nombre: {
            type: String
        },
        ubicacion: {
            type: String
        }
    }
})