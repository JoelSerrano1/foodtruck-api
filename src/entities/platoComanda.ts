import { Entity } from "./entity"

export class PlatoComanda implements Entity {
    constructor(
        readonly id: string,
        readonly plato_id: string,
        readonly comanda_id: string,
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            plato_id: this.plato_id,
            comanda_id: this.comanda_id,
        }
    }

    static create(id: string, plato_id: string, comanda_id: string): PlatoComanda {
        return new PlatoComanda(id, plato_id, comanda_id)
    }

    update(plato_id: string, comanda_id: string): PlatoComanda {
        return new PlatoComanda(
            this.id,
            this.plato_id,
            this.comanda_id
        )
    }

}