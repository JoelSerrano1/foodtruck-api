import { Helper } from "./helper";
import { foodtruckModel } from "../model/foodtruck.model";
import { EntitySchema } from "typeorm";
import { Foodtruck } from "../entities/foodtruck";


export class foodtruckHelper extends Helper<Foodtruck> {

    getEntitySchema(): EntitySchema<Foodtruck> {
        return foodtruckModel
    }

    async findFoodtruckById(id: string): Promise<Foodtruck | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findFoodtrucks(): Promise<Foodtruck[]> {
        return (await this.getRepository()).find()
    }

    async createFoodtruck(foodtruck: Foodtruck): Promise<Foodtruck> {
        return (await this.getRepository()).save(foodtruck)
    }

    async updateFoodtruck(foodtruck: Foodtruck): Promise<void> {
        await (await this.getRepository()).update(foodtruck.id, foodtruck.getPrimitive())
    }

    async deleteFoodtruck(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }

}