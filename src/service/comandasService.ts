import { Comandas, estado } from "../entities/comandas";
import { comandasHelper } from "../helpers/comandasHelper";
import { ComandaNotFound } from "../errors/comanda/comandaNotFound";
import { ComandaBadRequest } from "../errors/comanda/comandaBadRequest";

export class comandasService {

    constructor(private readonly helper: comandasHelper) { }

    async findComandasById(id: string): Promise<Comandas> {

        const comandas = await this.helper.findComandasById(id)

        if (!comandas) {
            throw new ComandaNotFound(`The comandas with id ${id} can't be reach`)
        }

        return comandas

    }

    async findComandass(): Promise<Comandas[]> {
        return this.helper.findComandass()
    }

    async createComandas(id: string, clienteId: string, horaRecogida: string, estado: estado, explicacionCancelacion: string, propuestaAlternativa: string): Promise<Comandas> {
        try {
            const comandas = Comandas.create(id, clienteId, horaRecogida, estado, explicacionCancelacion, propuestaAlternativa)
            return await this.helper.createComandas(comandas)
        } catch (error) {
            throw new ComandaBadRequest("Can't create comandas")
        }
    }

    async updateComandas(id: string, clienteId: string, horaRecogida: string, estado: estado, explicacionCancelacion: string, propuestaAlternativa: string): Promise<Comandas> {

        const existingComandas = await this.findComandasById(id)

        try {
            const updatedComandas = existingComandas.update(clienteId, horaRecogida, estado, explicacionCancelacion, propuestaAlternativa)
            await this.helper.updateComandas(updatedComandas)
            return updatedComandas
        } catch (error) {
            throw new ComandaBadRequest("Can't update comandas")
        }
    }

    async deleteComandas(id: string): Promise<Comandas> {

        const deletedComandas = await this.findComandasById(id)

        try {
            await this.helper.deleteComandas(id)
            return deletedComandas
        } catch (error) {
            throw new ComandaBadRequest("Can't delete comandas")
        }
    }

}
