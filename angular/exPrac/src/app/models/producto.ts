export class Producto{
    public nombre: string;
    public marca: string;
    public precio: number;
    public unidades: number;

    constructor(nombre: string, marca: string, precio: number, unidades: number ){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.unidades = unidades;
    }
}