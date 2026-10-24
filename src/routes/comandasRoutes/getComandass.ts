import { Router } from "express";
import { GetComandassController } from "../../controllers/ComandasController/getComandassController";
import { comandasHelper } from "../../helpers/comandasHelper";
import { comandasService } from "../../service/comandasService";

const helper = new comandasHelper()
const service = new comandasService(helper)

const controller = new GetComandassController(service)

export function getComandassRoute(router: Router) {
    router.get("/v1/comandas", controller.run.bind(controller))
}
