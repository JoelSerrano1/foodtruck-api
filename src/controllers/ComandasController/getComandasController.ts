import { Request, Response } from "express"
import { comandasService } from "../../service/comandasService"
import { ComandaNotFound } from "../../errors/comanda/comandaNotFound"
import { ComandaBadRequest } from "../../errors/comanda/comandaBadRequest"

export class GetComandasController {

    constructor(private readonly comandasService: comandasService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            const comandas = await this.comandasService.findComandasById(id as string)

            return res.status(200).json({ ok: true, data: comandas })
        } catch (e) {
            if (e instanceof ComandaNotFound) return res.status(404).send()
            if (e instanceof ComandaBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
