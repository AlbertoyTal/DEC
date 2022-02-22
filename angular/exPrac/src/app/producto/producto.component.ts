import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Producto } from '../models/producto';


@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit, DoCheck,OnDestroy {
   
  public carrito: Array<Producto>;

  public texto: string;

  public nombre: string;
  public marca: string;
  public precio: number;
  public unidades: number;

  public color: string;

  constructor() {
    this.nombre= "";
    this.marca= "";
    this.precio= 0;
    this.unidades= 0;
    this.color="lavender";
    this.carrito = [new Producto("Melocotón","Alipende",2,15),
      new Producto("Margarina","Mercadona",1,2),
      new Producto("Arroz con leche","Hacendado",1.20,14),
      new Producto("Queso","Marcosa",4,2),
      new Producto("Vino","Mamá",18.5,3)
    ];
  this.texto="a";
   }

  ngOnInit(): void {
    console.log(this.texto);
  }
  ngDoCheck(): void {
      this.texto = "Ha cambiado";
      console.log(this.texto);
  }
  ngOnDestroy(): void {
      console.log("destroyado");
  }
  
  addProducto(){
    if(this.nombre!="" &&this.marca!="" && this.precio!=0 && this.unidades!=0 ){
      this.carrito.push(new Producto(this.nombre,this.marca,this.precio,this.unidades));
    }
    else{
      alert("dfgkldsfgjohdfhsgkn");
    }
    
  }

}
