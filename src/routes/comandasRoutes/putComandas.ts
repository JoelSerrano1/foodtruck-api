import { Router } from "express";
import { PutComandasController } from "../../controllers/ComandasController/putComandasController";
import { comandasHelper } from "../../helpers/comandasHelper";
import { comandasService } from "../../service/comandasService";

const helper = new comandasHelper()
const service = new comandasService(helper)

const controller = new PutComandasController(service)

export function putComandasRoute(router: Router) {
    router.put("/v1/comandas", controller.run.bind(controller))
}
