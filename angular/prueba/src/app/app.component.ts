import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi primera prueba';
  texto = 'Nos vamos a casa';
  public mostrar_videojuegos: boolean = true; // creamos la variable pública para poder visualizar y 
                                              // ocultar el componente
  public mostrarZapatillas: boolean = true;
  // creamos un método para poder crear y destruir el componente videojuego
ocultarVideojuegos(valor: boolean) {
  this.mostrar_videojuegos = valor;
  }
  ocultarZapatillas(valor: boolean) {
    this.mostrarZapatillas = valor;
    }
}
