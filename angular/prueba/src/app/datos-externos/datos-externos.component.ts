import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.services';

@Component({
  selector: 'app-datos-externos',
  templateUrl: './datos-externos.component.html',
  styleUrls: ['./datos-externos.component.scss'],
  providers: [PeticionesServices]
})
export class DatosExternosComponent implements OnInit {

  public user: any;
  public userId: string;

  constructor(
    private _peticionesService: PeticionesServices
  ) {
    this.userId="1";
   }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this._peticionesService.getUser(this.userId).subscribe(result=>{
      // Recogemos los que devuelve la consulta
      this.user = result.data;
    },
    error=>{
      console.log("<any>error");
    }
    );
  }
}
