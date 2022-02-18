export class Videojuego{
    public nombre: string;
    public company: string;
    public precio: number;
    public online: boolean;
    public stock: boolean;
    constructor(nombre: string, company: string, precio: number, online: boolean, stock: boolean){
        this.nombre = nombre;
        this.company = company;
        this.precio = precio;
        this.online = online;
        this.stock = stock;
    }
}