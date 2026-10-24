import { Helper } from "./helper";
import { menuModel } from "../model/menu.model";
import { EntitySchema } from "typeorm";
import { Menu } from "../entities/menu";


export class menuHelper extends Helper<Menu> {

    getEntitySchema(): EntitySchema<Menu> {
        return menuModel
    }

    async findMenuById(id: string): Promise<Menu | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findMenus(): Promise<Menu[]> {
        return (await this.getRepository()).find()
    }

    async createMenu(menu: Menu): Promise<Menu> {
        return (await this.getRepository()).save(menu)
    }

    async updateMenu(menu: Menu): Promise<void> {
        await (await this.getRepository()).update(menu.id, menu.getPrimitive())
    }

    async deleteMenu(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }

}
