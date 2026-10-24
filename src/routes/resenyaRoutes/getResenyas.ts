import { Router } from "express";
import { GetResenyasController } from "../../controllers/ResenyaController/getResenyasController";
import { ResenyaHelper } from "../../helpers/resenyaHelper";
import { ResenyaService } from "../../service/resenyaService";

const helper = new ResenyaHelper()
const service = new ResenyaService(helper)

const controller = new GetResenyasController(service)

export function getResenyasRoute(router: Router) {
    router.get("/v1/resenyas", controller.run.bind(controller))
}
