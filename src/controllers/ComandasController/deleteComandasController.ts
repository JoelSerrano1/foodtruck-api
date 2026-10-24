import { Request, Response } from "express"
import { comandasService } from "../../service/comandasService"
import { ComandaNotFound } from "../../errors/comanda/comandaNotFound"
import { ComandaBadRequest } from "../../errors/comanda/comandaBadRequest"

export class DeleteComandasController {

    constructor(private readonly comandasService: comandasService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            await this.comandasService.deleteComandas(id as string)

            return res.status(200).json({ ok: true })
        } catch (e) {
            if (e instanceof ComandaNotFound) return res.status(404).send()
            if (e instanceof ComandaBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
