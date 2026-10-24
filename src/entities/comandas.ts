import { Entity } from "./entity"


export enum estado {
    PENDIENTE = "PENDIENTE",
    PREPARADO = "PREPARADO",
    LISTO = "LISTO",
    RECOGIDO = "RECOGIDO",
    CANCELADO = "CANCELADO"
}

export class Comandas implements Entity {
    constructor(
        readonly id: string,
        readonly userId: string,
        readonly horaRecogida: string,
        readonly estado: estado,
        readonly explicacionCancelacion: string,
        readonly propuestaAlternativa: string,


    ) { }

    getPrimitive() {
        return {
            id: this.id,
            userId: this.userId,
            horaRecogida: this.horaRecogida,
            estado: this.estado,
            explicacionCancelacion: this.explicacionCancelacion,
            propuestaAlternativa: this.propuestaAlternativa,
        }
    }

    static create(id: string, userId: string, horaRecogida: string, estado: estado, explicacionCancelacion: string, propuestaAlternativa: string): Comandas {
        return new Comandas(id, userId, horaRecogida, estado, explicacionCancelacion, propuestaAlternativa)
    }

    update(userId: string, horaRecogida: string, estado: estado, explicacionCancelacion: string, propuestaAlternativa: string): Comandas {
        return new Comandas(
            this.id,
            this.userId,
            this.horaRecogida,
            this.estado,
            this.explicacionCancelacion,
            this.propuestaAlternativa,
        )
    }

}