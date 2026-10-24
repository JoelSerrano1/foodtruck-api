import { Request, Response } from "express"
import { eventoService } from "../../service/eventoService"
import { EventoNotFound } from "../../errors/evento/eventoNotFound"
import { EventoBadRequest } from "../../errors/evento/eventoBadRequest"

export class DeleteEventoController {

    constructor(private readonly eventoService: eventoService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            await this.eventoService.deleteEvento(id as string)

            return res.status(200).json({ ok: true })
        } catch (e) {
            if (e instanceof EventoNotFound) return res.status(404).send()
            if (e instanceof EventoBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
