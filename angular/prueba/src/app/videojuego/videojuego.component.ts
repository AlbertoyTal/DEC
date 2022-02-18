import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";
import { Videojuego } from "../models/videojuego";

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
        // public nombre: string;
        // public company: string;
        // public precio: number;
        // public online: boolean;
        // public stock: boolean;
        public videojuegos: Array<Videojuego>;
        constructor(){
            this.videojuegos = [new Videojuego("Call of Duty","Activision",60,true,true),
            new Videojuego("Lost Ark","Amazon",0,true,true),
            new Videojuego("Counter Strike","Valve",0,true,true),
            new Videojuego("GTA V","Rockstar",15,true,true)
            ];
            this.titulo = "Componente de videojuegos";
            this.listado = "Listado de los Videojuegos más populares";
            // this.nombre = "";
            // this.company = "";
            // this.precio = 0;
            // this.online = true;
            // this.stock = true;

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
        // addVideojuego(){

        // }
}