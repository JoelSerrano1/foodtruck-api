import { Request, Response } from "express"
import { menuService } from "../../service/menuService"
import { MenuNotFound } from "../../errors/menu/menuNotFound"
import { MenuBadRequest } from "../../errors/menu/menuBadRequest"

export class PutMenuController {

    constructor(private readonly menuService: menuService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const menu = req.body
            const updatedMenu = await this.menuService.updateMenu(menu.id, menu.foodtruckId, menu.nombre, menu.descripcion)
            return res.status(200).json({ ok: true, data: updatedMenu })
        } catch (e) {
            if (e instanceof MenuNotFound) return res.status(404).send()
            if (e instanceof MenuBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
