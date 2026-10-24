import { Helper } from "./helper";
import { eventoModel } from "../model/evento.model";
import { EntitySchema } from "typeorm";
import { Evento } from "../entities/evento";


export class eventoHelper extends Helper<Evento> {

    getEntitySchema(): EntitySchema<Evento> {
        return eventoModel
    }

    async findEventoById(id: string): Promise<Evento | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findEventos(): Promise<Evento[]> {
        return (await this.getRepository()).find()
    }

    async createEvento(evento: Evento): Promise<Evento> {
        return (await this.getRepository()).save(evento)
    }

    async updateEvento(evento: Evento): Promise<void> {
        await (await this.getRepository()).update(evento.id, evento.getPrimitive())
    }

    async deleteEvento(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }

}
