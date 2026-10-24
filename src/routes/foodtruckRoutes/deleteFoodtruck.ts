import { Router } from "express";
import { DeleteFoodtruckController } from "../../controllers/FoodtruckController/deleteFoodtruckController";
import { foodtruckHelper } from "../../helpers/foodtruckHelper";
import { foodtruckService } from "../../service/foodtruckService";

const helper = new foodtruckHelper()
const service = new foodtruckService(helper)

const controller = new DeleteFoodtruckController(service)

export function deleteFoodtrucksRoute(router: Router) {
    router.delete("/v1/foodtrucks/:id", controller.run.bind(controller))
}       