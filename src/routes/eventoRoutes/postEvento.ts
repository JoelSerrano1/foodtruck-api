import { Router } from "express";
import { PostEventoController } from "../../controllers/EventoController/postEventoController";
import { eventoHelper } from "../../helpers/eventoHelper";
import { eventoService } from "../../service/eventoService";

const helper = new eventoHelper()
const service = new eventoService(helper)

const controller = new PostEventoController(service)

export function postEventoRoute(router: Router) {
    router.post("/v1/evento", controller.run.bind(controller))
}
