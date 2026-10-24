import { Router } from "express"
import { getHealthRoute } from "./health"
import { getMeRoute } from "./getMe"
import { getComandasRoute } from "./comandasRoutes/getComandas"
import { getFoodtrucksRoute } from "./foodtruckRoutes/getFoodtrucks"
import { getFoodtruckRoute } from "./foodtruckRoutes/getFoodtruck"
import { getMenusRoute } from "./menuRoutes/getMenus"
import { getMenuRoute } from "./menuRoutes/getMenu"
import { getPlatosRoute } from "./platoRoutes/getPlatos"
import { getPlatoRoute } from "./platoRoutes/getPlato"
import { getResenyasRoute } from "./resenyaRoutes/getResenyas"
import { getResenyaRoute } from "./resenyaRoutes/getResenya"
import { getUsersRoute } from "./userRoutes/getUsers"
import { getUserRoute } from "./userRoutes/getUser"
import { getEventosRoute } from "./eventoRoutes/getEventos"
import { getEventoRoute } from "./eventoRoutes/getEvento"
import { postComandasRoute } from "./comandasRoutes/postComandas"
import { postFoodtrucksRoute } from "./foodtruckRoutes/postFoodtruck"
import { postMenuRoute } from "./menuRoutes/postMenu"
import { postPlatoRoute } from "./platoRoutes/postPlato"
import { postResenyaRoute } from "./resenyaRoutes/postResenya"
import { postUsersRoute } from "./userRoutes/postUsers"
import { postEventoRoute } from "./eventoRoutes/postEvento"
import { putComandasRoute } from "./comandasRoutes/putComandas"
import { putFoodtrucksRoute } from "./foodtruckRoutes/putFoodtruck"
import { putMenuRoute } from "./menuRoutes/putMenu"
import { putPlatoRoute } from "./platoRoutes/putPlato"
import { putResenyaRoute } from "./resenyaRoutes/putResenya"
import { putUsersRoute } from "./userRoutes/putUsers"
import { putEventoRoute } from "./eventoRoutes/putEvento"
import { deleteComandasRoute } from "./comandasRoutes/deleteComandas"
import { deleteFoodtrucksRoute } from "./foodtruckRoutes/deleteFoodtruck"
import { deleteMenuRoute } from "./menuRoutes/deleteMenu"
import { deletePlatoRoute } from "./platoRoutes/deletePlato"
import { deleteResenyaRoute } from "./resenyaRoutes/deleteResenya"
import { deleteUsersRoute } from "./userRoutes/deleteUsers"
import { deleteEventoRoute } from "./eventoRoutes/deleteEvento"

export function registerRoutes(): Router {
    const router = Router()

    getHealthRoute(router)
    getMeRoute(router)

    getComandasRoute(router)
    getFoodtrucksRoute(router)
    getFoodtruckRoute(router)
    getMenusRoute(router)
    getMenuRoute(router)
    getPlatosRoute(router)
    getPlatoRoute(router)
    getResenyasRoute(router)
    getResenyaRoute(router)
    getUsersRoute(router)
    getUserRoute(router)
    getEventosRoute(router)
    getEventoRoute(router)

    postComandasRoute(router)
    postFoodtrucksRoute(router)
    postMenuRoute(router)
    postPlatoRoute(router)
    postResenyaRoute(router)
    postUsersRoute(router)
    postEventoRoute(router)

    putComandasRoute(router)
    putFoodtrucksRoute(router)
    putMenuRoute(router)
    putPlatoRoute(router)
    putResenyaRoute(router)
    putUsersRoute(router)
    putEventoRoute(router)

    deleteComandasRoute(router)
    deleteFoodtrucksRoute(router)
    deleteMenuRoute(router)
    deletePlatoRoute(router)
    deleteResenyaRoute(router)
    deleteUsersRoute(router)
    deleteEventoRoute(router)

    return router
}