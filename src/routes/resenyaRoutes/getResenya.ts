import { Router } from "express";
import { GetResenyaController } from "../../controllers/ResenyaController/getResenyaController";
import { ResenyaHelper } from "../../helpers/resenyaHelper";
import { ResenyaService } from "../../service/resenyaService";

const helper = new ResenyaHelper()
const service = new ResenyaService(helper)

const controller = new GetResenyaController(service)

export function getResenyaRoute(router: Router) {
    router.get("/v1/resenyas/:id", controller.run.bind(controller))
}
