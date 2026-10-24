import { Request, Response } from "express"
import { foodtruckService } from "../../service/foodtruckService"
import { FoodtruckNotFound } from "../../errors/foodtruck/foodtruckNotFound"
import { eventoFoodtruckService } from "../../service/eventoFoodtruckService"
import { FoodtruckBadRequest } from "../../errors/foodtruck/foodtruckBadRequest"

export class PostFoodtruckController {

    constructor(private readonly foodtruckService: foodtruckService, private readonly eventoFoodtruckService: eventoFoodtruckService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const foodtruck = req.body

            const newFoodtruck = await this.foodtruckService.createFoodtruck(foodtruck.id, foodtruck.nombre, foodtruck.ubicacion, foodtruck.disponible)

            let eventoFoodtruckId: number = 1

            for (const eventoId in req.body.eventosId) {

                const eventoFoodtruckCreated = await this.eventoFoodtruckService.createEventoFoodtruck(eventoFoodtruckId.toString(), newFoodtruck.id, eventoId)

                eventoFoodtruckId++
            }

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