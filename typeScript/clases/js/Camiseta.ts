class Camiseta{
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    constructor (color: string, modelo: string, marca: string, talla: string, precio: number){
        // this.setColor(color);
        this.color = color;
        // this.setModelo(modelo);
        this.modelo = modelo;
        // this.setMarca(marca);
        this.marca = marca;
        // this.setTalla(talla);
        this.talla = talla;
        // this.setPrecio(precio);
        this.precio = precio;
    }
    public setColor(color: string): void{
            this.color = color;
    }
    public setModelo(modelo: string): void{
        this.modelo = modelo;
    }
    public setMarca(marca: string): void{
        this.marca = marca;
    }
    public setTalla(talla: string): void{
        this.talla = talla;
    }
    public setPrecio(precio: number): void{
        this.precio = precio;
    }
    public getColor(color: string): string{
        return this.color;
    }
    public getModelo(modelo: string): string{
        return this.modelo;
    }
    public getMarca(marca: string): string{
        return this.marca;
    }
    public getTalla(talla: string): string{
        return this.talla;
    }
    public getPrecio(precio: number): number{
        return this.precio;
    }
    
}