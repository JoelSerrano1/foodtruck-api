import { Helper } from "./helper";
import { eventoFoodtruckModel } from "../model/eventoFoodtruck.model";
import { EntitySchema } from "typeorm";
import { EventoFoodtruck } from "../entities/eventoFoodtruck";


export class eventoFoodtruckHelper extends Helper<EventoFoodtruck> {

    getEntitySchema(): EntitySchema<EventoFoodtruck> {
        return eventoFoodtruckModel
    }

    async findEventoFoodtruckById(id: string): Promise<EventoFoodtruck | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findEventoFoodtrucks(): Promise<EventoFoodtruck[]> {
        return (await this.getRepository()).find()
    }

    async createEventoFoodtruck(eventoFoodtruck: EventoFoodtruck): Promise<EventoFoodtruck> {
        return (await this.getRepository()).save(eventoFoodtruck)
    }

    async updateEventoFoodtruck(eventoFoodtruck: EventoFoodtruck): Promise<void> {
        await (await this.getRepository()).update(eventoFoodtruck.id, eventoFoodtruck.getPrimitive())
    }

    async deleteEventoFoodtruck(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }

}
