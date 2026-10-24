import { Router } from "express";
import { GetComandasController } from "../../controllers/ComandasController/getComandasController";
import { comandasHelper } from "../../helpers/comandasHelper";
import { comandasService } from "../../service/comandasService";

const helper = new comandasHelper()
const service = new comandasService(helper)

const controller = new GetComandasController(service)

export function getComandasRoute(router: Router) {
    router.get("/v1/comandas/:id", controller.run.bind(controller))
}
