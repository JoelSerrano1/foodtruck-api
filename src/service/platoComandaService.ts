import { platoComandaHelper } from "../helpers/platoComandaHelper";
import { PlatoComanda } from "../entities/platoComanda";
import { PlatoComandaNotFound } from "../errors/platoComanda/platoComandaNotFound";
import { PlatoComandaBadRequest } from "../errors/platoComanda/platoComandaBadRequest";

export class platoComandaService {

    constructor(private readonly helper: platoComandaHelper) { }

    async findPlatoComandaById(id: string): Promise<PlatoComanda> {

        const platoComanda = await this.helper.findPlatoComandaById(id)

        if (!platoComanda) {
            throw new PlatoComandaNotFound(`The platoComanda with id ${id} can't be reach`)
        }

        return platoComanda

    }

    async findPlatoComandas(): Promise<PlatoComanda[]> {
        return this.helper.findPlatoComandas()
    }

    async createPlatoComanda(id: string, menuId: string, platoId: string): Promise<PlatoComanda> {
        try {
            const platoComanda = PlatoComanda.create(id, menuId, platoId)
            return await this.helper.createPlatoComanda(platoComanda)
        } catch (error) {
            throw new PlatoComandaBadRequest("Can't create platoComanda")
        }
    }

    async updatePlatoComanda(id: string, menuId: string, platoId: string): Promise<PlatoComanda> {

        const existingPlatoComanda = await this.findPlatoComandaById(id)

        try {
            const updatedPlatoComanda = existingPlatoComanda.update(menuId, platoId)
            await this.helper.updatePlatoComanda(updatedPlatoComanda)
            return updatedPlatoComanda
        } catch (error) {
            throw new PlatoComandaBadRequest("Can't update platoComanda")
        }
    }

    async deletePlatoComanda(id: string): Promise<PlatoComanda> {

        const deletedPlatoComanda = await this.findPlatoComandaById(id)

        try {
            await this.helper.deletePlatoComanda(id)
            return deletedPlatoComanda
        } catch (error) {
            throw new PlatoComandaBadRequest("Can't delete platoComanda")
        }
    }

}
