import { Router } from "express";
import { GetFoodtrucksController } from "../../controllers/FoodtruckController/getFoodtrucksController";
import { foodtruckHelper } from "../../helpers/foodtruckHelper";
import { foodtruckService } from "../../service/foodtruckService";

const helper = new foodtruckHelper()
const service = new foodtruckService(helper)

const controller = new GetFoodtrucksController(service)

export function getFoodtrucksRoute(router: Router) {
    router.get("/v1/foodtrucks", controller.run.bind(controller))
}           