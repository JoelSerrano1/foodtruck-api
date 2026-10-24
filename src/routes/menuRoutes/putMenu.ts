import { Router } from "express";
import { PutMenuController } from "../../controllers/MenuController/putMenuController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";

const helper = new menuHelper()
const service = new menuService(helper)

const controller = new PutMenuController(service)

export function putMenuRoute(router: Router) {
    router.put("/v1/menu", controller.run.bind(controller))
}
