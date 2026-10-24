import { Router } from "express";
import { GetMenuController } from "../../controllers/MenuController/getMenuController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";

const helper = new menuHelper()
const service = new menuService(helper)

const controller = new GetMenuController(service)

export function getMenuRoute(router: Router) {
    router.get("/v1/menu/:id", controller.run.bind(controller))
}
