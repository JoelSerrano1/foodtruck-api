import { Router } from "express";
import { PutFoodtruckController } from "../../controllers/FoodtruckController/putFoodtruckController";
import { foodtruckHelper } from "../../helpers/foodtruckHelper";
import { foodtruckService } from "../../service/foodtruckService";

const helper = new foodtruckHelper()
const service = new foodtruckService(helper)

const controller = new PutFoodtruckController(service)

export function putFoodtrucksRoute(router: Router) {
    router.put("/v1/foodtrucks", controller.run.bind(controller))
}       