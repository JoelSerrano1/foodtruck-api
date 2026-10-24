import { Helper } from "./helper";
import { platoModel } from "../model/plato.model";
import { EntitySchema } from "typeorm";
import { Plato } from "../entities/plato";


export class platoHelper extends Helper<Plato> {

    getEntitySchema(): EntitySchema<Plato> {
        return platoModel
    }

    async findPlatoById(id: string): Promise<Plato | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findPlatos(): Promise<Plato[]> {
        return (await this.getRepository()).find()
    }

    async createPlato(plato: Plato): Promise<Plato> {
        return (await this.getRepository()).save(plato)
    }

    async updatePlato(plato: Plato): Promise<void> {
        await (await this.getRepository()).update(plato.id, plato.getPrimitive())
    }

    async deletePlato(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }

}
