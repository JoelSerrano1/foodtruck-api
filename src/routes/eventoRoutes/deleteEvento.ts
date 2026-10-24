import { Router } from "express";
import { DeleteEventoController } from "../../controllers/EventoController/deleteEventoController";
import { eventoHelper } from "../../helpers/eventoHelper";
import { eventoService } from "../../service/eventoService";

const helper = new eventoHelper()
const service = new eventoService(helper)

const controller = new DeleteEventoController(service)

export function deleteEventoRoute(router: Router) {
    router.delete("/v1/evento/:id", controller.run.bind(controller))
}
