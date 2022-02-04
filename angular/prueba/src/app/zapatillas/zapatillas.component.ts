import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.scss']
})
export class ZapatillasComponent implements OnInit {
  public titulo: string="Componente de Zapatillas";
  constructor() { }

  ngOnInit(): void {
  }

}
