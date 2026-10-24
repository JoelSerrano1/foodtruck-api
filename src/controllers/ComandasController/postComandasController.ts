import { Request, Response } from "express"
import { comandasService } from "../../service/comandasService"
import { platoComandaService } from "../../service/platoComandaService"
import { v4 } from "uuid"
import { ComandaNotFound } from "../../errors/comanda/comandaNotFound"
import { ComandaBadRequest } from "../../errors/comanda/comandaBadRequest"

export class PostComandasController {

    constructor(private readonly comandasService: comandasService, private readonly platoComandaService: platoComandaService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const comandas = req.body

            const comandasCreated = await this.comandasService.createComandas(comandas.id, comandas.userId, comandas.horaRecogida, comandas.estado, comandas.explicacionCancelacion, comandas.propuestaAlternativa)


            for (const platoId in req.body.platosId) {
                const platoComandaCreated = await this.platoComandaService.createPlatoComanda(v4(), comandasCreated.id, platoId)
            }


            return res.status(200).json({ ok: true, data: comandasCreated })
        } catch (e) {
            if (e instanceof ComandaNotFound) return res.status(404).send()
            if (e instanceof ComandaBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
