import { Entity } from "./entity"



export class Evento implements Entity {
    constructor(
        readonly id: string,
        readonly nombre: string,
        readonly descripcion: string,
        readonly fechaInicio: string,
        readonly fechaFin: string,
        readonly barrio: string,

    ) { }

    getPrimitive() {
        return {
            id: this.id,
            nombre: this.nombre,
            descripcion: this.descripcion,
            fechaInicio: this.fechaInicio,
            fechaFin: this.fechaFin,
            barrio: this.barrio,
        }
    }

    static create(id: string, nombre: string, descripcion: string, fechaInicio: string, fechaFin: string, barrio: string): Evento {
        return new Evento(id, nombre, descripcion, fechaInicio, fechaFin, barrio)
    }

    update(nombre: string, descripcion: string, fechaInicio: string, fechaFin: string, barrio: string): Evento {
        return new Evento(
            this.id,
            this.nombre,
            this.descripcion,
            this.fechaInicio,
            this.fechaFin,
            this.barrio,
        )
    }

}