import { EventoFoodtruck } from "../entities/eventoFoodtruck";
import { eventoFoodtruckHelper } from "../helpers/eventoFoodtruckHelper";
import { EventoFoodtruckNotFound } from "../errors/eventoFoodtruck/eventoFoodtruckNotFound";
import { EventoFoodtruckBadRequest } from "../errors/eventoFoodtruck/eventoFoodtruckBadRequest";

export class eventoFoodtruckService {

    constructor(private readonly helper: eventoFoodtruckHelper) { }

    async findEventoFoodtruckById(id: string): Promise<EventoFoodtruck> {

        const eventoFoodtruck = await this.helper.findEventoFoodtruckById(id)

        if (!eventoFoodtruck) {
            throw new EventoFoodtruckNotFound(`The eventoFoodtruck with id ${id} can't be reach`)
        }

        return eventoFoodtruck

    }

    async findEventoFoodtrucks(): Promise<EventoFoodtruck[]> {
        return this.helper.findEventoFoodtrucks()
    }

    async createEventoFoodtruck(id: string, eventoId: string, foodtruckId: string): Promise<EventoFoodtruck> {
        try {
            const eventoFoodtruck = EventoFoodtruck.create(id, eventoId, foodtruckId)
            return await this.helper.createEventoFoodtruck(eventoFoodtruck)
        } catch (error) {
            throw new EventoFoodtruckBadRequest("Can't create eventoFoodtruck")
        }
    }

    async updateEventoFoodtruck(id: string, eventoId: string, foodtruckId: string): Promise<EventoFoodtruck> {

        const existingEventoFoodtruck = await this.findEventoFoodtruckById(id)

        try {
            const updatedEventoFoodtruck = existingEventoFoodtruck.update(eventoId, foodtruckId)
            await this.helper.updateEventoFoodtruck(updatedEventoFoodtruck)
            return updatedEventoFoodtruck
        } catch (error) {
            throw new EventoFoodtruckBadRequest("Can't update eventoFoodtruck")
        }
    }

    async deleteEventoFoodtruck(id: string): Promise<EventoFoodtruck> {

        const deletedEventoFoodtruck = await this.findEventoFoodtruckById(id)

        try {
            await this.helper.deleteEventoFoodtruck(id)
            return deletedEventoFoodtruck
        } catch (error) {
            throw new EventoFoodtruckBadRequest("Can't delete eventoFoodtruck")
        }
    }

}
