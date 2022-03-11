import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localesEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localesEs , 'es');

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { videojuegoComponent } from './videojuego/videojuego.component';
import { DadoComponent } from './dado/dado.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { NombreComponent } from './nombre/nombre.component';
import { PipesComponent } from './pipes/pipes.component';
import { appRoutingProviders, routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { DatosExternosComponent } from './datos-externos/datos-externos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    videojuegoComponent,
    DadoComponent,
    ZapatillasComponent,
    NombreComponent,
    PipesComponent,
    HomeComponent,
    DatosExternosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    {provide:LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
