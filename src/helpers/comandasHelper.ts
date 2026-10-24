import { Helper } from "./helper";
import { comandasModel } from "../model/comandas.model";
import { EntitySchema } from "typeorm";
import { Comandas } from "../entities/comandas";


export class comandasHelper extends Helper<Comandas> {

    getEntitySchema(): EntitySchema<Comandas> {
        return comandasModel
    }

    async findComandasById(id: string): Promise<Comandas | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findComandass(): Promise<Comandas[]> {
        return (await this.getRepository()).find()
    }

    async createComandas(comandas: Comandas): Promise<Comandas> {
        return (await this.getRepository()).save(comandas)
    }

    async updateComandas(comandas: Comandas): Promise<void> {
        await (await this.getRepository()).update(comandas.id, comandas.getPrimitive())
    }

    async deleteComandas(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }

}
