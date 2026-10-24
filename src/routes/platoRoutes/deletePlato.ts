import { Router } from "express";
import { DeletePlatoController } from "../../controllers/PlatoController/deletePlatoController";
import { platoHelper } from "../../helpers/platoHelper";
import { platoService } from "../../service/platoService";

const helper = new platoHelper()
const service = new platoService(helper)

const controller = new DeletePlatoController(service)

export function deletePlatoRoute(router: Router) {
    router.delete("/v1/plato/:id", controller.run.bind(controller))
}
