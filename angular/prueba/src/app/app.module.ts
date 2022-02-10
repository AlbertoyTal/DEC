import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { videojuegoComponent } from './videojuego/videojuego.component';
import { DadoComponent } from './dado/dado.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { NombreComponent } from './nombre/nombre.component';


@NgModule({
  declarations: [
    AppComponent,
    videojuegoComponent,
    DadoComponent,
    ZapatillasComponent,
    NombreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
