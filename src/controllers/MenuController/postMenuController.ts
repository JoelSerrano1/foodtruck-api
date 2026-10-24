import { Request, Response } from "express"
import { menuService } from "../../service/menuService"
import { platoMenuService } from "../../service/platoMenuService"
import { MenuNotFound } from "../../errors/menu/menuNotFound"
import { MenuBadRequest } from "../../errors/menu/menuBadRequest"

export class PostMenuController {

    constructor(private readonly menuService: menuService, private readonly platoMenuService: platoMenuService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const menu = req.body

            const menuCreated = await this.menuService.createMenu(menu.id, menu.foodtruckId, menu.nombre, menu.descripcion)

            let platoMenuId: number = 1

            for (const platoId in req.body.platosId) {
                const platoMenuCreated = await this.platoMenuService.createPlatoMenu(platoMenuId.toString(), menuCreated.id, platoId)

                platoMenuId++
            }


            return res.status(200).json({ ok: true, data: menuCreated })
        } catch (e) {
            if (e instanceof MenuNotFound) return res.status(404).send()
            if (e instanceof MenuBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
