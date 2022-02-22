import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exPrac';
   
  public  config: any;
  public muestra: boolean;

  constructor(){
    this.muestra = true;
    this.config = Configuracion;
  }

  mostrarP(){
    if(this.muestra){
      this.muestra = false;
    }
    else{
      this.muestra = true;
    }
  }
  

}
