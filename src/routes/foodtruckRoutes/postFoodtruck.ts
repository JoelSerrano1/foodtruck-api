import { Router } from "express";
import { PostFoodtruckController } from "../../controllers/FoodtruckController/postFoodtruckController";
import { foodtruckHelper } from "../../helpers/foodtruckHelper";
import { foodtruckService } from "../../service/foodtruckService";
import { eventoFoodtruckHelper } from "../../helpers/eventoFoodtruckHelper";
import { eventoFoodtruckService } from "../../service/eventoFoodtruckService";

const helper = new foodtruckHelper()
const service = new foodtruckService(helper)

const helperRelacion = new eventoFoodtruckHelper()
const serviceRelacion = new eventoFoodtruckService(helperRelacion)

const controller = new PostFoodtruckController(service, serviceRelacion)

export function postFoodtrucksRoute(router: Router) {
    router.post("/v1/foodtrucks", controller.run.bind(controller))
}           