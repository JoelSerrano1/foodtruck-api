import { Request, Response } from "express"
import { ResenyaService } from "../../service/resenyaService"
import { ResenyaNotFound } from "../../errors/resenya/resenyaNotFound"
import { ResenyaBadRequest } from "../../errors/resenya/resenyaBadRequest"

export class PutResenyaController {

    constructor(private readonly resenyaService: ResenyaService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const resenya = req.body

            const newResenya = await this.resenyaService.updateResenya(resenya.id, resenya.user_id, resenya.valoracion, resenya.comentario)


            return res.status(200).json({
                ok: true,
                data: newResenya
            })
        } catch (e) {
            if (e instanceof ResenyaNotFound) return res.status(404).send()
            if (e instanceof ResenyaBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}