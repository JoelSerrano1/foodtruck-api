import { Request, Response } from "express"
import { foodtruckService } from "../../service/foodtruckService"
import { FoodtruckNotFound } from "../../errors/foodtruck/foodtruckNotFound"
import { FoodtruckBadRequest } from "../../errors/foodtruck/foodtruckBadRequest"

export class GetFoodtruckController {

    constructor(private readonly foodtruckService: foodtruckService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const { id } = req.params


            const foodtruck = await this.foodtruckService.findFoodtruckById(id as string)


            return res.status(200).json({
                ok: true,
                data: foodtruck
            })
        } catch (e) {
            if (e instanceof FoodtruckNotFound) return res.status(404).send()
            if (e instanceof FoodtruckBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}