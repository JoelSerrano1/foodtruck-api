import { Request, Response } from "express"
import { platoService } from "../../service/platoService"
import { PlatoBadRequest } from "../../errors/plato/platoBadRequest"

export class GetPlatosController {

    constructor(private readonly platoService: platoService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const platos = await this.platoService.findPlatos()
            return res.status(200).json({ ok: true, data: platos })
        } catch (e) {
            if (e instanceof PlatoBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
