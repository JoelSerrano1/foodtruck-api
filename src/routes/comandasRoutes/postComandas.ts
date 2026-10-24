import { Router } from "express";
import { PostComandasController } from "../../controllers/ComandasController/postComandasController";
import { comandasHelper } from "../../helpers/comandasHelper";
import { comandasService } from "../../service/comandasService";
import { platoComandaService } from "../../service/platoComandaService";
import { platoComandaHelper } from "../../helpers/platoComandaHelper";


const helper = new comandasHelper()
const service = new comandasService(helper)
const helperRelacion = new platoComandaHelper()
const serviceRelacion = new platoComandaService(helperRelacion)



const controller = new PostComandasController(service, serviceRelacion)

export function postComandasRoute(router: Router) {
    router.post("/v1/comandas", controller.run.bind(controller))
}
