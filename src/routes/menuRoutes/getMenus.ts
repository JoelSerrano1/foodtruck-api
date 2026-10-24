import { Router } from "express";
import { GetMenusController } from "../../controllers/MenuController/getMenusController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";

const helper = new menuHelper()
const service = new menuService(helper)

const controller = new GetMenusController(service)

export function getMenusRoute(router: Router) {
    router.get("/v1/menus", controller.run.bind(controller))
}
