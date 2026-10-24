import { Request, Response } from "express"
import { eventoService } from "../../service/eventoService"
import { EventoBadRequest } from "../../errors/evento/eventoBadRequest"

export class GetEventosController {

    constructor(private readonly eventoService: eventoService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const eventos = await this.eventoService.findEventos()
            return res.status(200).json({ ok: true, data: eventos })
        } catch (e) {
            if (e instanceof EventoBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
