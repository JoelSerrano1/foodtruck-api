import { Router } from "express";
import { DeleteComandasController } from "../../controllers/ComandasController/deleteComandasController";
import { comandasHelper } from "../../helpers/comandasHelper";
import { comandasService } from "../../service/comandasService";

const helper = new comandasHelper()
const service = new comandasService(helper)

const controller = new DeleteComandasController(service)

export function deleteComandasRoute(router: Router) {
    router.delete("/v1/comandas/:id", controller.run.bind(controller))
}
