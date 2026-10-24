import { Plato } from "../entities/plato";
import { platoHelper } from "../helpers/platoHelper";
import { PlatoNotFound } from "../errors/plato/platoNotFound";
import { PlatoBadRequest } from "../errors/plato/platoBadRequest";

export class platoService {

    constructor(private readonly helper: platoHelper) { }

    async findPlatoById(id: string): Promise<Plato> {

        const plato = await this.helper.findPlatoById(id)

        if (!plato) {
            throw new PlatoNotFound(`The plato with id ${id} can't be reach`)
        }

        return plato

    }

    async findPlatos(): Promise<Plato[]> {
        return this.helper.findPlatos()
    }

    async createPlato(id: string, nombre: string, precio: number, descripcion: string, disponible: boolean): Promise<Plato> {
        try {
            const plato = Plato.create(id, nombre, precio, descripcion, disponible)
            return await this.helper.createPlato(plato)
        } catch (error) {
            throw new PlatoBadRequest("Can't create plato")
        }
    }

    async updatePlato(id: string, nombre: string, precio: number, descripcion: string, disponible: boolean): Promise<Plato> {

        const existingPlato = await this.findPlatoById(id)

        try {
            const updatedPlato = existingPlato.update(nombre, precio, descripcion, disponible)
            await this.helper.updatePlato(updatedPlato)
            return updatedPlato
        } catch (error) {
            throw new PlatoBadRequest("Can't update plato")
        }
    }

    async deletePlato(id: string): Promise<Plato> {

        const deletedPlato = await this.findPlatoById(id)

        try {
            await this.helper.deletePlato(id)
            return deletedPlato
        } catch (error) {
            throw new PlatoBadRequest("Can't delete plato")
        }
    }

}
