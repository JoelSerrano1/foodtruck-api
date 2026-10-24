import { Request, Response } from "express"
import { menuService } from "../../service/menuService"
import { MenuBadRequest } from "../../errors/menu/menuBadRequest"

export class GetMenusController {

    constructor(private readonly menuService: menuService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const menus = await this.menuService.findMenus()
            return res.status(200).json({ ok: true, data: menus })
        } catch (e) {
            if (e instanceof MenuBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }
}
