import { Router } from "express";
import { DeleteResenyaController } from "../../controllers/ResenyaController/deleteResenyaController";
import { ResenyaHelper } from "../../helpers/resenyaHelper";
import { ResenyaService } from "../../service/resenyaService";

const helper = new ResenyaHelper()
const service = new ResenyaService(helper)

const controller = new DeleteResenyaController(service)

export function deleteResenyaRoute(router: Router) {
    router.delete("/v1/resenyas/:id", controller.run.bind(controller))
}
