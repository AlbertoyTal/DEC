import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatillas';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss']
})
export class ZapatillasComponent implements OnInit {
  public titulo: string="Componente de Zapatillas";
  public zapatillas: Array<Zapatilla>;
  public marcas: Array<String>;
  public color: string;       // creamos una variable 
  public textoMarca: string="";

  constructor() {
    this.color = "blue";       // asignamos valor
    this.marcas = new Array;
    this.zapatillas = [
      new Zapatilla("Reebok Classic", "Reebok", "Verde", 123, true),
      new Zapatilla("Nike Runner", "Nike", "Negro", 113, true),
      new Zapatilla("Nike Air", "Nike", "Rojo", 150, false),
      new Zapatilla("Adidas Air", "Adidas", "Blanco", 132, true),
      new Zapatilla("Adidas Tango", "Adidas", "Azul", 112, false),
      new Zapatilla("Adidas Campeona", "Adidas", "Blanco", 135, true)
    ];
    
   }

  ngOnInit(): void {
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

}
