import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { videojuegoComponent } from './videojuego/videojuego.component';
import { DadoComponent } from './dado/dado.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';

@NgModule({
  declarations: [
    AppComponent,
    videojuegoComponent,
    DadoComponent,
    ZapatillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
