import { Postagem } from "./Postagem"

export class User{
    public dataNascimento: string
    public foto: string
    public id: number
    public nome: string
    public senha: string
    public tipo: string
    public usuario: string
    public postagem: Postagem[]
}