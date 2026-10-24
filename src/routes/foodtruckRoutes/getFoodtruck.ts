import { Router } from "express";
import { GetFoodtruckController } from "../../controllers/FoodtruckController/getFoodtruckController";
import { foodtruckHelper } from "../../helpers/foodtruckHelper";
import { foodtruckService } from "../../service/foodtruckService";

const helper = new foodtruckHelper()
const service = new foodtruckService(helper)

const controller = new GetFoodtruckController(service)

export function getFoodtruckRoute(router: Router) {
    router.get("/v1/foodtruck/:id", controller.run.bind(controller))
}