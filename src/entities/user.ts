import { Entity } from "./entity"

export enum Tipo {
    Cocinero = "COCINERO",
    User = "USER",
    Admin = "ADMIN"
}

export class User implements Entity {
    constructor(
        readonly id: string,
        readonly nombre: string,
        readonly email: string,
        readonly contrasenya: string,
        readonly tipo: Tipo
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            nombre: this.nombre,
            email: this.email,
            contrasenya: this.contrasenya,
            tipo: this.tipo
        }
    }

    static create(id: string, nombre: string, email: string, contrasenya: string, tipo: Tipo): User {
        return new User(id, nombre, email, contrasenya, tipo)
    }

    update(nombre: string, email: string, contrasenya: string, tipo: Tipo): User {
        return new User(
            this.id,
            this.nombre,
            this.email,
            this.contrasenya,
            this.tipo
        )
    }

}