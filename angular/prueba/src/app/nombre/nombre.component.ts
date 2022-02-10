import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.scss']
})
export class NombreComponent implements OnInit {
  public name: string;

  constructor() {
    this.name = "José Luis";
 }
    
  ngOnInit(): void {
  }
  mostrar(){
    console.log(this.name);
  }

}
