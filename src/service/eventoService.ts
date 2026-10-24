import { Evento } from "../entities/evento";
import { eventoHelper } from "../helpers/eventoHelper";
import { EventoNotFound } from "../errors/evento/eventoNotFound";
import { EventoBadRequest } from "../errors/evento/eventoBadRequest";

export class eventoService {

    constructor(private readonly helper: eventoHelper) { }

    async findEventoById(id: string): Promise<Evento> {

        const evento = await this.helper.findEventoById(id)

        if (!evento) {
            throw new EventoNotFound(`The evento with id ${id} can't be reach`)
        }

        return evento

    }

    async findEventos(): Promise<Evento[]> {
        return this.helper.findEventos()
    }

    async createEvento(id: string, nombre: string, descripcion: string, fechaInicio: string, fechaFin: string, barrio: string): Promise<Evento> {
        try {
            const evento = Evento.create(id, nombre, descripcion, fechaInicio, fechaFin, barrio)
            return await this.helper.createEvento(evento)
        } catch (error) {
            throw new EventoBadRequest("Can't create evento")
        }
    }

    async updateEvento(id: string, nombre: string, descripcion: string, fechaInicio: string, fechaFin: string, barrio: string): Promise<Evento> {

        const existingEvento = await this.findEventoById(id)

        try {
            const updatedEvento = existingEvento.update(nombre, descripcion, fechaInicio, fechaFin, barrio)
            await this.helper.updateEvento(updatedEvento)
            return updatedEvento
        } catch (error) {
            throw new EventoBadRequest("Can't update evento")
        }
    }

    async deleteEvento(id: string): Promise<Evento> {

        const deletedEvento = await this.findEventoById(id)

        try {
            await this.helper.deleteEvento(id)
            return deletedEvento
        } catch (error) {
            throw new EventoBadRequest("Can't delete evento")
        }
    }

}
