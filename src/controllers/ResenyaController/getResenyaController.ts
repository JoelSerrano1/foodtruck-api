import { Request, Response } from "express"
import { ResenyaService } from "../../service/resenyaService"
import { ResenyaNotFound } from "../../errors/resenya/resenyaNotFound"
import { ResenyaBadRequest } from "../../errors/resenya/resenyaBadRequest"

export class GetResenyaController {

    constructor(private readonly resenyaService: ResenyaService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            const resenya = await this.resenyaService.findResenyaById(id as string)

            return res.status(200).json({
                ok: true,
                data: resenya
            })
        } catch (e) {
            if (e instanceof ResenyaNotFound) return res.status(404).send()
            if (e instanceof ResenyaBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}