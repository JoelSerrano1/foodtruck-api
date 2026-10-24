import { Router } from "express";
import { PutEventoController } from "../../controllers/EventoController/putEventoController";
import { eventoHelper } from "../../helpers/eventoHelper";
import { eventoService } from "../../service/eventoService";

const helper = new eventoHelper()
const service = new eventoService(helper)

const controller = new PutEventoController(service)

export function putEventoRoute(router: Router) {
    router.put("/v1/evento", controller.run.bind(controller))
}
