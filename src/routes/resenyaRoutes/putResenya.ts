import { Router } from "express";
import { PutResenyaController } from "../../controllers/ResenyaController/putResenyaController";
import { ResenyaHelper } from "../../helpers/resenyaHelper";
import { ResenyaService } from "../../service/resenyaService";

const helper = new ResenyaHelper()
const service = new ResenyaService(helper)

const controller = new PutResenyaController(service)

export function putResenyaRoute(router: Router) {
    router.put("/v1/resenyas", controller.run.bind(controller))
}
