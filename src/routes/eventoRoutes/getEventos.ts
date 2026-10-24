import { Router } from "express";
import { GetEventosController } from "../../controllers/EventoController/getEventosController";
import { eventoHelper } from "../../helpers/eventoHelper";
import { eventoService } from "../../service/eventoService";

const helper = new eventoHelper()
const service = new eventoService(helper)

const controller = new GetEventosController(service)

export function getEventosRoute(router: Router) {
    router.get("/v1/eventos", controller.run.bind(controller))
}
