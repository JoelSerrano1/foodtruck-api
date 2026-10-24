import { Entity } from "./entity"

export class EventoFoodtruck implements Entity {
    constructor(
        readonly id: string,
        readonly evento_id: string,
        readonly foodtruck_id: string,
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            evento_id: this.evento_id,
            foodtruck_id: this.foodtruck_id,
        }
    }

    static create(id: string, evento_id: string, foodtruck_id: string): EventoFoodtruck {
        return new EventoFoodtruck(id, evento_id, foodtruck_id)
    }

    update(evento_id: string, foodtruck_id: string): EventoFoodtruck {
        return new EventoFoodtruck(
            this.id,
            evento_id,
            foodtruck_id,
        )
    }

}