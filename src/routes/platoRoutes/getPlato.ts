import { Router } from "express";
import { GetPlatoController } from "../../controllers/PlatoController/getPlatoController";
import { platoHelper } from "../../helpers/platoHelper";
import { platoService } from "../../service/platoService";

const helper = new platoHelper()
const service = new platoService(helper)

const controller = new GetPlatoController(service)

export function getPlatoRoute(router: Router) {
    router.get("/v1/plato/:id", controller.run.bind(controller))
}
