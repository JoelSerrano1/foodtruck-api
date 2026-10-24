import { Router } from "express";
import { GetEventoController } from "../../controllers/EventoController/getEventoController";
import { eventoHelper } from "../../helpers/eventoHelper";
import { eventoService } from "../../service/eventoService";

const helper = new eventoHelper()
const service = new eventoService(helper)

const controller = new GetEventoController(service)

export function getEventoRoute(router: Router) {
    router.get("/v1/evento/:id", controller.run.bind(controller))
}
