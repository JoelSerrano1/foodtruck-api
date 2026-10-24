import { Menu } from "../entities/menu";
import { menuHelper } from "../helpers/menuHelper";
import { MenuNotFound } from "../errors/menu/menuNotFound";
import { MenuBadRequest } from "../errors/menu/menuBadRequest";

export class menuService {

    constructor(private readonly helper: menuHelper) { }

    async findMenuById(id: string): Promise<Menu> {

        const menu = await this.helper.findMenuById(id)

        if (!menu) {
            throw new MenuNotFound(`The menu with id ${id} can't be reach`)
        }

        return menu

    }

    async findMenus(): Promise<Menu[]> {
        return this.helper.findMenus()
    }

    async createMenu(id: string, foodtruckId: string, nombre: string, descripcion: string): Promise<Menu> {
        try {
            const menu = Menu.create(id, foodtruckId, nombre, descripcion)
            return await this.helper.createMenu(menu)
        } catch (error) {
            throw new MenuBadRequest("Can't create menu")
        }
    }

    async updateMenu(id: string, foodtruckId: string, nombre: string, descripcion: string): Promise<Menu> {

        const existingMenu = await this.findMenuById(id)

        try {
            const updatedMenu = existingMenu.update(foodtruckId, nombre, descripcion)
            await this.helper.updateMenu(updatedMenu)
            return updatedMenu
        } catch (error) {
            throw new MenuBadRequest("Can't update menu")
        }
    }

    async deleteMenu(id: string): Promise<Menu> {

        const deletedMenu = await this.findMenuById(id)

        try {
            await this.helper.deleteMenu(id)
            return deletedMenu
        } catch (error) {
            throw new MenuBadRequest("Can't delete menu")
        }
    }

}
