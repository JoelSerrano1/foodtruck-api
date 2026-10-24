import { Entity } from "./entity"

export class Resenya implements Entity {
    constructor(
        readonly id: string,
        readonly user_id: string,
        readonly valoracion: number,
        readonly comentario: string
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            user_id: this.user_id,
            valoracion: this.valoracion,
            comentario: this.comentario
        }
    }

    static create(id: string, user_id: string, valoracion: number, comentario: string): Resenya {
        return new Resenya(id, user_id, valoracion, comentario)
    }

    update(user_id: string, valoracion: number, comentario: string): Resenya {
        return new Resenya(
            this.id,
            this.user_id,
            this.valoracion,
            this.comentario
        )
    }

}