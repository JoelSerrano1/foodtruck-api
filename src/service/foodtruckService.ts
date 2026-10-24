import { Foodtruck } from "../entities/foodtruck";
import { foodtruckHelper } from "../helpers/foodtruckHelper";
import { FoodtruckNotFound } from "../errors/foodtruck/foodtruckNotFound";
import { FoodtruckBadRequest } from "../errors/foodtruck/foodtruckBadRequest";

export class foodtruckService {

    constructor(private readonly helper: foodtruckHelper) { }

    async findFoodtruckById(id: string): Promise<Foodtruck> {

        const foodtruck = await this.helper.findFoodtruckById(id)

        if (!foodtruck) {
            throw new FoodtruckNotFound(`The foodtruck with id ${id} can't be reach`)
        }

        return foodtruck

    }

    async findFoodtrucks(): Promise<Foodtruck[]> {
        return this.helper.findFoodtrucks()
    }

    async createFoodtruck(id: string, nombre: string, ubicacion: string, disponible: boolean): Promise<Foodtruck> {
        try {
            const foodtruck = Foodtruck.create(id, nombre, ubicacion, disponible)
            return await this.helper.createFoodtruck(foodtruck)
        } catch (error) {
            throw new FoodtruckBadRequest("Can't create foodtruck")
        }
    }

    async updateFoodtruck(id: string, nombre: string, ubicacion: string, disponible: boolean): Promise<Foodtruck> {

        const existingFoodtruck = await this.findFoodtruckById(id)

        try {
            const updatedFoodtruck = existingFoodtruck.update(nombre, ubicacion, disponible)
            await this.helper.updateFoodtruck(updatedFoodtruck)
            return updatedFoodtruck
        } catch (error) {
            throw new FoodtruckBadRequest("Can't update foodtruck")
        }
    }

    async deleteFoodtruck(id: string): Promise<Foodtruck> {

        const deletedFoodtruck = await this.findFoodtruckById(id)

        try {
            await this.helper.deleteFoodtruck(id)
            return deletedFoodtruck
        } catch (error) {
            throw new FoodtruckBadRequest("Can't delete foodtruck")
        }
    }

}