import { EntitySchema } from "typeorm"
import { EventoFoodtruck } from "../entities/eventoFoodtruck"

export const eventoFoodtruckModel = new EntitySchema<EventoFoodtruck>({
    name: "eventoFoodtruck",
    tableName: "eventoFoodtruck",
    target: EventoFoodtruck,
    columns: {
        id: {
            type: String,
            primary: true
        },
        evento_id: {
            type: String
        },
        foodtruck_id: {
            type: String
        },
    }
})
