import { Injectable } from "@angular/core";
// importamos el modelo
import { Zapatilla } from "../models/zapatillas";


// Exportamos el servicio
@Injectable()
export class ZapatillasService{
    public zapatillas: Array<Zapatilla>; // creamos el array
    constructor(){  
        this.zapatillas = [
            new Zapatilla("Reebok Classic", "Reebok", "Verde", 123, true),
            new Zapatilla("Nike Runner", "Nike", "Negro", 113, true),
            new Zapatilla("Nike Air", "Nike", "Rojo", 150, false),
            new Zapatilla("Adidas Air", "Adidas", "Blanco", 132, true),
            new Zapatilla("Adidas Tango", "Adidas", "Azul", 112, false),
            new Zapatilla("Adidas Campeona", "Adidas", "Blanco", 135, true)
          ];
    }

    // Creamos el método para poder pasar el servicio
    
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}