import { Router } from "express";
import { DeleteMenuController } from "../../controllers/MenuController/deleteMenuController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";

const helper = new menuHelper()
const service = new menuService(helper)

const controller = new DeleteMenuController(service)

export function deleteMenuRoute(router: Router) {
    router.delete("/v1/menu/:id", controller.run.bind(controller))
}
