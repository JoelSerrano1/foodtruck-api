import { Helper } from "./helper";
import { platoMenuModel } from "../model/platoMenu.model";
import { EntitySchema } from "typeorm";
import { PlatoMenu } from "../entities/platoMenu";


export class platoMenuHelper extends Helper<PlatoMenu> {

    getEntitySchema(): EntitySchema<PlatoMenu> {
        return platoMenuModel
    }

    async findPlatoMenuById(id: string): Promise<PlatoMenu | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findPlatoMenus(): Promise<PlatoMenu[]> {
        return (await this.getRepository()).find()
    }

    async createPlatoMenu(platoMenu: PlatoMenu): Promise<PlatoMenu> {
        return (await this.getRepository()).save(platoMenu)
    }

    async updatePlatoMenu(platoMenu: PlatoMenu): Promise<void> {
        await (await this.getRepository()).update(platoMenu.id, platoMenu.getPrimitive())
    }

    async deletePlatoMenu(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }

}
