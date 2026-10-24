import { Entity } from "./entity"

export class Foodtruck implements Entity {
    constructor(
        readonly id: string,
        readonly nombre: string,
        readonly ubicacion: string,
        readonly disponible: boolean,


    ) { }

    getPrimitive() {
        return {
            id: this.id,
            nombre: this.nombre,
            ubicacion: this.ubicacion,
            disponible: this.disponible

        }
    }

    static create(id: string, nombre: string, ubicacion: string, disponible: boolean): Foodtruck {
        return new Foodtruck(id, nombre, ubicacion, disponible)
    }

    update(nombre: string, ubicacion: string, disponible: boolean): Foodtruck {
        return new Foodtruck(
            this.id,
            this.nombre,
            this.ubicacion,
            this.disponible
        )
    }

}