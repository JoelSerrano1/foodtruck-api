import { Request, Response } from "express"
import { ResenyaService } from "../../service/resenyaService"
import { ResenyaBadRequest } from "../../errors/resenya/resenyaBadRequest"

export class GetResenyasController {

    constructor(private readonly resenyaService: ResenyaService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const resenyas = await this.resenyaService.findResenyas()
            return res.status(200).json(resenyas)
        } catch (e) {
            if (e instanceof ResenyaBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}