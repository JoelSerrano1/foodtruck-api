import { Request, Response } from "express"
import { foodtruckService } from "../../service/foodtruckService"
import { FoodtruckBadRequest } from "../../errors/foodtruck/foodtruckBadRequest"

export class GetFoodtrucksController {

    constructor(private readonly foodtruckService: foodtruckService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const foodtrucks = await this.foodtruckService.findFoodtrucks()
            return res.status(200).json(foodtrucks)
        } catch (e) {
            if (e instanceof FoodtruckBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}