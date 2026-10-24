import { Router } from "express";
import { PostResenyaController } from "../../controllers/ResenyaController/postResenyaController";
import { ResenyaHelper } from "../../helpers/resenyaHelper";
import { ResenyaService } from "../../service/resenyaService";

const helper = new ResenyaHelper()
const service = new ResenyaService(helper)

const controller = new PostResenyaController(service)

export function postResenyaRoute(router: Router) {
    router.post("/v1/resenyas", controller.run.bind(controller))
}
