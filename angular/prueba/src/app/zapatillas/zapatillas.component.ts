import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatillas';
import { ZapatillasService } from '../services/zapatillas.services';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss'],
  providers: [ZapatillasService]
})
export class ZapatillasComponent implements OnInit {
  public titulo: string="Componente de Zapatillas";
  public zapatillas: Array<Zapatilla>;
  public marcas: Array<String>;
  public color: string;       // creamos una variable 
  public textoMarca: string="";
  public nombre:string;
  public marca:string;
  public c:string;
  public precio:number;
  

  constructor(
    // dentro del constructor hay que crear el servicio
    private _zapatillaService: ZapatillasService
    ) {
    this.color = "blue";       // asignamos valor
    this.nombre = "";
    this.marca = "";
    this.c = "";
    this.precio=0;

    // Hay que inicializar el array
    this.zapatillas = new Array;

    this.marcas = new Array;
    // this.zapatillas = [
    //   new Zapatilla("Reebok Classic", "Reebok", "Verde", 123, true),
    //   new Zapatilla("Nike Runner", "Nike", "Negro", 113, true),
    //   new Zapatilla("Nike Air", "Nike", "Rojo", 150, false),
    //   new Zapatilla("Adidas Air", "Adidas", "Blanco", 132, true),
    //   new Zapatilla("Adidas Tango", "Adidas", "Azul", 112, false),
    //   new Zapatilla("Adidas Campeona", "Adidas", "Blanco", 135, true)
    // ];
    
   }

  ngOnInit(): void {
    // Llamamos al método del servicio para poder cargar nuestro array
    this.zapatillas = this._zapatillaService.getZapatillas();
    this.getMarcas();
  }

  getMarcas(): void{
    this.zapatillas.forEach((zapatilla, index)=>{
      if(this.marcas.indexOf(zapatilla.marca) < 0){
        this.marcas.push(zapatilla.marca);
      }
    });
  }
  aniadirMarca(){
    this.marcas.push(this.textoMarca);
  }
  addZapatilla(){
    this.zapatillas.push(new Zapatilla(this.nombre,this.marca,this.c,this.precio,true))
    this.getMarcas();
  }
}
