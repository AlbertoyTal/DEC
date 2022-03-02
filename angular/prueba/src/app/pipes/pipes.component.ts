import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
public nombre :string = "";
public PI = Math.PI;
public numero: number = 0;
public hoy = new Date();
  constructor() { 

  }

  ngOnInit(): void {
  }

}
