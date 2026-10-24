import { Helper } from "./helper";
import { platoComandaModel } from "../model/platoComanda.model";
import { EntitySchema } from "typeorm";
import { PlatoComanda } from "../entities/platoComanda";


export class platoComandaHelper extends Helper<PlatoComanda> {

    getEntitySchema(): EntitySchema<PlatoComanda> {
        return platoComandaModel
    }

    async findPlatoComandaById(id: string): Promise<PlatoComanda | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findPlatoComandas(): Promise<PlatoComanda[]> {
        return (await this.getRepository()).find()
    }

    async createPlatoComanda(platoComanda: PlatoComanda): Promise<PlatoComanda> {
        return (await this.getRepository()).save(platoComanda)
    }

    async updatePlatoComanda(platoComanda: PlatoComanda): Promise<void> {
        await (await this.getRepository()).update(platoComanda.id, platoComanda.getPrimitive())
    }

    async deletePlatoComanda(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }

}
