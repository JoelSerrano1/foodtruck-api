import { Router } from "express";
import { GetPlatosController } from "../../controllers/PlatoController/getPlatosController";
import { platoHelper } from "../../helpers/platoHelper";
import { platoService } from "../../service/platoService";

const helper = new platoHelper()
const service = new platoService(helper)

const controller = new GetPlatosController(service)

export function getPlatosRoute(router: Router) {
    router.get("/v1/platos", controller.run.bind(controller))
}
