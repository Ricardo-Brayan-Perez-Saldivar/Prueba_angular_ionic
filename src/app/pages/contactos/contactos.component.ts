import { Component, OnInit } from '@angular/core';
import { BasedatosService } from 'src/app/servicios/basedatos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss'],
})
export class ContactosComponent  implements OnInit {

  nomPagina="Contactos";

  constructor(public basedatosService: BasedatosService) { }

  ngOnInit() {
    // this.basedatosService.sumar(10,5);
    const usuarios = this.basedatosService.cargarUsuario();
    console.log('estos son los usuarios= ',usuarios);
    
  }

  deleteUsuario(){
    this.basedatosService.deleteUser(0);
    const usuarios = this.basedatosService.cargarUsuario();
    console.log('estos son los usuarios= ',usuarios);
  }
}
