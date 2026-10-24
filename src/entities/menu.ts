import { Entity } from "./entity"

export class Menu implements Entity {
    constructor(
        readonly id: string,
        readonly foodtruckId: string,
        readonly nombre: string,
        readonly descripcion: string,
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            foodtruckId: this.foodtruckId,
            nombre: this.nombre,
            descripcion: this.descripcion,
        }
    }

    static create(id: string, foodtruckId: string, nombre: string, descripcion: string): Menu {
        return new Menu(id, foodtruckId, nombre, descripcion)
    }

    update(foodtruckId: string, nombre: string, descripcion: string): Menu {
        return new Menu(
            this.id,
            this.foodtruckId,
            this.nombre,
            this.descripcion,
        )
    }

}