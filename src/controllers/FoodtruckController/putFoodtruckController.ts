import { Request, Response } from "express"
import { foodtruckService } from "../../service/foodtruckService"
import { FoodtruckNotFound } from "../../errors/foodtruck/foodtruckNotFound"
import { FoodtruckBadRequest } from "../../errors/foodtruck/foodtruckBadRequest"

export class PutFoodtruckController {

    constructor(private readonly foodtruckService: foodtruckService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const foodtruck = req.body

            const newFoodtruck = await this.foodtruckService.updateFoodtruck(foodtruck.id, foodtruck.nombre, foodtruck.ubicacion, foodtruck.disponible)


            return res.status(200).json({
                ok: true,
                data: newFoodtruck
            })
        } catch (e) {
            if (e instanceof FoodtruckNotFound) return res.status(404).send()
            if (e instanceof FoodtruckBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}