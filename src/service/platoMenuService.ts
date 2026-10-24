import { platoMenuHelper } from "../helpers/platoMenuHelper";
import { PlatoMenu } from "../entities/platoMenu";
import { PlatoMenuNotFound } from "../errors/platoMenu/platoMenuNotFound";
import { PlatoMenuBadRequest } from "../errors/platoMenu/platoMenuBadRequest";

export class platoMenuService {

    constructor(private readonly helper: platoMenuHelper) { }

    async findPlatoMenuById(id: string): Promise<PlatoMenu> {

        const platoMenu = await this.helper.findPlatoMenuById(id)

        if (!platoMenu) {
            throw new PlatoMenuNotFound(`The platoMenu with id ${id} can't be reach`)
        }

        return platoMenu

    }

    async findPlatoMenus(): Promise<PlatoMenu[]> {
        return this.helper.findPlatoMenus()
    }

    async createPlatoMenu(id: string, menuId: string, platoId: string): Promise<PlatoMenu> {
        try {
            const platoMenu = PlatoMenu.create(id, menuId, platoId)
            return await this.helper.createPlatoMenu(platoMenu)
        } catch (error) {
            throw new PlatoMenuBadRequest("Can't create platoMenu")
        }
    }

    async updatePlatoMenu(id: string, menuId: string, platoId: string): Promise<PlatoMenu> {

        const existingPlatoMenu = await this.findPlatoMenuById(id)

        try {
            const updatedPlatoMenu = existingPlatoMenu.update(menuId, platoId)
            await this.helper.updatePlatoMenu(updatedPlatoMenu)
            return updatedPlatoMenu
        } catch (error) {
            throw new PlatoMenuBadRequest("Can't update platoMenu")
        }
    }

    async deletePlatoMenu(id: string): Promise<PlatoMenu> {

        const deletedPlatoMenu = await this.findPlatoMenuById(id)

        try {
            await this.helper.deletePlatoMenu(id)
            return deletedPlatoMenu
        } catch (error) {
            throw new PlatoMenuBadRequest("Can't delete platoMenu")
        }
    }

}
