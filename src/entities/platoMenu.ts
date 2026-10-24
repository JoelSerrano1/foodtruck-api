import { Entity } from "./entity"

export class PlatoMenu implements Entity {
    constructor(
        readonly id: string,
        readonly plato_id: string,
        readonly menu_id: string,
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            plato_id: this.plato_id,
            menu_id: this.menu_id,
        }
    }

    static create(id: string, plato_id: string, menu_id: string): PlatoMenu {
        return new PlatoMenu(id, plato_id, menu_id)
    }

    update(plato_id: string, menu_id: string): PlatoMenu {
        return new PlatoMenu(
            this.id,
            plato_id,
            menu_id,
        )
    }

}