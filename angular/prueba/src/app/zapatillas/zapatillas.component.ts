import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatillas';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss']
})
export class ZapatillasComponent implements OnInit {
  public titulo: string="Componente de Zapatillas";
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla("Reebok Classic", "Reebok", "Verde", 123, true),
      new Zapatilla("Nike Runner", "Nike", "Negro", 113, true),
      new Zapatilla("Adidas Air", "Adidas", "Blanco", 132, true)
    ]
   }

  ngOnInit(): void {
  }

}
