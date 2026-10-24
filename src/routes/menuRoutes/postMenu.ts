import { Router } from "express";
import { PostMenuController } from "../../controllers/MenuController/postMenuController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";
import { platoMenuHelper } from "../../helpers/platoMenuHelper";
import { platoMenuService } from "../../service/platoMenuService";

const helper = new menuHelper()
const service = new menuService(helper)

const helperRelacion = new platoMenuHelper()
const serviceRelacion = new platoMenuService(helperRelacion)

const controller = new PostMenuController(service, serviceRelacion)



export function postMenuRoute(router: Router) {
    router.post("/v1/menu", controller.run.bind(controller))
}
