import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : "videojuego",
    // Se deben poner las comillas invertidas
    // para poder poner código HTML
    templateUrl : "./videojuego.component.html"
})
    // Para crear el nombre de la clase se utiliza la sintaxis Camelcase
export class videojuegoComponent implements OnInit, DoCheck, OnDestroy{
        public titulo: string;
        public listado: string;
        constructor(){
            this.titulo = "Componente de videojuegos";
            this.listado = "Listado de los Videojuegos más populares";
        }
        ngOnInit(): void {
            console.log("OnInit ejecutado");
        }
        ngDoCheck(): void {
            console.log("DoCheck ejecutado");
        }
        ngOnDestroy(): void {
            console.log("OnDestroy ejecutado");
        }
        cambiarTitulo(){
            this.titulo = "Nuevo título del componente de Videojuegos";
        }
}