// importar los módulos del router de angular

import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// importar los componentes

import { DadoComponent } from "./dado/dado.component";
import { HomeComponent } from "./home/home.component";
import { NombreComponent } from "./nombre/nombre.component";
import { PipesComponent } from "./pipes/pipes.component";
import { videojuegoComponent } from "./videojuego/videojuego.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";

// crear un array con las rutas de acceso a los componentes

const appRoutes: Routes = [
    {path : "", component : HomeComponent},
    {path : "zapatillas", component : ZapatillasComponent},
    {path : "videojuego", component : videojuegoComponent},
    {path : "nombre", component : NombreComponent},
    {path : "pipes", component : PipesComponent},
    {path : "dado", component : DadoComponent},
    {path : "**", component : HomeComponent}
];

// exportar el módulo del router

export const appRoutingProviders: any[] = []; // exportamos el servicio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);