import { EntitySchema } from "typeorm"
import { User } from "../entities/user"

export const UserModel = new EntitySchema<User>({
    name: "user",
    tableName: "user",
    target: User,
    columns: {
        id: {
            type: String,
            primary: true
        },
        nombre: {
            type: String
        },
        email: {
            type: String
        },
        contrasenya: {
            type: String
        },
        tipo: {
            type: String
        }
    }
})