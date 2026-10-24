import { Request, Response } from "express"
import { eventoService } from "../../service/eventoService"
import { EventoNotFound } from "../../errors/evento/eventoNotFound"
import { EventoBadRequest } from "../../errors/evento/eventoBadRequest"

export class PostEventoController {

    constructor(private readonly eventoService: eventoService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const evento = req.body

            const crearEvento = await this.eventoService.createEvento(evento.id, evento.nombre, evento.descripcion, evento.fechaInicio, evento.fechaFin, evento.barrio)

            return res.status(200).json({ ok: true, data: crearEvento })
        } catch (e) {
            if (e instanceof EventoNotFound) return res.status(404).send()
            if (e instanceof EventoBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
