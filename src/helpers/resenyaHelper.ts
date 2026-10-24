import { Helper } from "./helper";
import { resenyaModel } from "../model/resenya.model";
import { EntitySchema } from "typeorm";
import { Resenya } from "../entities/resenya";


export class ResenyaHelper extends Helper<Resenya> {

    getEntitySchema(): EntitySchema<Resenya> {
        return resenyaModel
    }

    async findResenyaById(id: string): Promise<Resenya | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findResenyas(): Promise<Resenya[]> {
        return (await this.getRepository()).find()
    }

    async createResenya(resenya: Resenya): Promise<Resenya> {
        return (await this.getRepository()).save(resenya)
    }

    async updateResenya(resenya: Resenya): Promise<void> {
        await (await this.getRepository()).update(resenya.id, resenya.getPrimitive())
    }

    async deleteResenya(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }

}
