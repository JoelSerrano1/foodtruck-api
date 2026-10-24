import { Router } from "express";
import { PostPlatoController } from "../../controllers/PlatoController/postPlatoController";
import { platoHelper } from "../../helpers/platoHelper";
import { platoService } from "../../service/platoService";

const helper = new platoHelper()
const service = new platoService(helper)

const controller = new PostPlatoController(service)

export function postPlatoRoute(router: Router) {
    router.post("/v1/plato", controller.run.bind(controller))
}
