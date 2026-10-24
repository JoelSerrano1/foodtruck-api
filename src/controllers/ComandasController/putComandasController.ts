import { Request, Response } from "express"
import { comandasService } from "../../service/comandasService"
import { ComandaNotFound } from "../../errors/comanda/comandaNotFound"
import { ComandaBadRequest } from "../../errors/comanda/comandaBadRequest"

export class PutComandasController {

    constructor(private readonly comandasService: comandasService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const comandas = req.body

            const updatedComandas = await this.comandasService.updateComandas(comandas.id, comandas.cliente_id, comandas.hora_recogida, comandas.estado, comandas.explicacion_cancelacion, comandas.propuesta_alternativa)

            return res.status(200).json({ ok: true, data: updatedComandas })
        } catch (e) {
            if (e instanceof ComandaNotFound) return res.status(404).send()
            if (e instanceof ComandaBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
