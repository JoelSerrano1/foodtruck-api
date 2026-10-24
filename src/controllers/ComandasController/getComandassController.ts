import { Request, Response } from "express"
import { comandasService } from "../../service/comandasService"
import { ComandaBadRequest } from "../../errors/comanda/comandaBadRequest"

export class GetComandassController {

    constructor(private readonly comandasService: comandasService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const comandass = await this.comandasService.findComandass()
            return res.status(200).json({ ok: true, data: comandass })
        } catch (e) {
            if (e instanceof ComandaBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
