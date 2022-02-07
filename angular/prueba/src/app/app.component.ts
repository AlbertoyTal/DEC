import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi primera prueba';
  texto = 'Nos vamos a casa';
  public descripcion: string = "";
  public mostrar_videojuegos: boolean = true; // creamos la variable pública para poder visualizar y 
                                              // ocultar el componente
  public mostrarZapatillas: boolean = true;

  public config: any;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;

  }
  // creamos un método para poder crear y destruir el componente videojuego
ocultarVideojuegos(valor: boolean) {
  this.mostrar_videojuegos = valor;
  }
  ocultarZapatillas(valor: boolean) {
    this.mostrarZapatillas = valor;
    }
}
