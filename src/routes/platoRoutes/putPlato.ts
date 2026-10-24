import { Router } from "express";
import { PutPlatoController } from "../../controllers/PlatoController/putPlatoController";
import { platoHelper } from "../../helpers/platoHelper";
import { platoService } from "../../service/platoService";

const helper = new platoHelper()
const service = new platoService(helper)

const controller = new PutPlatoController(service)

export function putPlatoRoute(router: Router) {
    router.put("/v1/plato", controller.run.bind(controller))
}
