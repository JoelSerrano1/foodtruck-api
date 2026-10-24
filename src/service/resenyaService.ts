import { Resenya } from "../entities/resenya";
import { ResenyaNotFound } from "../errors/resenya/resenyaNotFound";
import { ResenyaBadRequest } from "../errors/resenya/resenyaBadRequest";
import { ResenyaHelper } from "../helpers/resenyaHelper";


export class ResenyaService {

    constructor(private readonly helper: ResenyaHelper) { }

    async findResenyaById(id: string): Promise<Resenya> {

        const resenya = await this.helper.findResenyaById(id)

        if (!resenya) {
            throw new ResenyaNotFound(`The resenya with id ${id} can't be reach`)
        }

        return resenya

    }

    async findResenyas(): Promise<Resenya[]> {
        return this.helper.findResenyas()
    }

    async createResenya(id: string, user_id: string, valoracion: number, comentario: string): Promise<Resenya> {
        try {
            const resenya = Resenya.create(id, user_id, valoracion, comentario)
            return await this.helper.createResenya(resenya)
        } catch (error) {
            throw new ResenyaBadRequest("Can't create resenya")
        }
    }

    async updateResenya(id: string, user_id: string, valoracion: number, comentario: string): Promise<Resenya> {

        const existingResenya = await this.findResenyaById(id)

        try {
            const updatedResenya = existingResenya.update(user_id, valoracion, comentario)
            await this.helper.updateResenya(updatedResenya)
            return updatedResenya
        } catch (error) {
            throw new ResenyaBadRequest("Can't update resenya")
        }
    }

    async deleteResenya(id: string): Promise<Resenya> {

        const deletedResenya = await this.findResenyaById(id)

        try {
            await this.helper.deleteResenya(id)
            return deletedResenya
        } catch (error) {
            throw new ResenyaBadRequest("Can't delete resenya")
        }
    }

}
