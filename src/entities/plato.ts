import { Entity } from "./entity"

export class Plato implements Entity {
    constructor(
        readonly id: string,
        readonly nombre: string,
        readonly precio: number,
        readonly descripcion: string,
        readonly disponible: boolean
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            nombre: this.nombre,
            precio: this.precio,
            disponible: this.disponible
        }
    }

    static create(id: string, nombre: string, precio: number, descripcion: string, disponible: boolean): Plato {
        return new Plato(id, nombre, precio, descripcion, disponible)
    }

    update(nombre: string, precio: number, descripcion: string, disponible: boolean): Plato {
        return new Plato(
            this.id,
            this.nombre,
            this.precio,
            this.descripcion,
            this.disponible
        )
    }

}