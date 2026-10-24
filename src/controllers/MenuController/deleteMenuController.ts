import { Request, Response } from "express"
import { menuService } from "../../service/menuService"
import { MenuNotFound } from "../../errors/menu/menuNotFound"
import { MenuBadRequest } from "../../errors/menu/menuBadRequest"

export class DeleteMenuController {

    constructor(private readonly menuService: menuService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            await this.menuService.deleteMenu(id as string)

            return res.status(200).json({ ok: true })
        } catch (e) {
            if (e instanceof MenuNotFound) return res.status(404).send()
            if (e instanceof MenuBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
