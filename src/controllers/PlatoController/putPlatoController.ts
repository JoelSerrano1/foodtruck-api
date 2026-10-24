import { Request, Response } from "express"
import { platoService } from "../../service/platoService"
import { PlatoNotFound } from "../../errors/plato/platoNotFound"
import { PlatoBadRequest } from "../../errors/plato/platoBadRequest"

export class PutPlatoController {

    constructor(private readonly platoService: platoService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const plato = req.body
            const updatedPlato = await this.platoService.updatePlato(plato.id, plato.nombre, plato.precio, plato.descripcion, plato.disponible)
            return res.status(200).json({ ok: true, data: updatedPlato })
        } catch (e) {
            if (e instanceof PlatoNotFound) return res.status(404).send()
            if (e instanceof PlatoBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
