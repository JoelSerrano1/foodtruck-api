import { Request, Response } from "express"
import { platoService } from "../../service/platoService"
import { PlatoNotFound } from "../../errors/plato/platoNotFound"
import { PlatoBadRequest } from "../../errors/plato/platoBadRequest"

export class GetPlatoController {

    constructor(private readonly platoService: platoService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            const plato = await this.platoService.findPlatoById(id as string)

            return res.status(200).json({ ok: true, data: plato })
        } catch (e) {
            if (e instanceof PlatoNotFound) return res.status(404).send()
            if (e instanceof PlatoBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
