import { Component, OnInit } from '@angular/core';
import { Servicio, Usuario } from 'src/app/modelos/interfaces';
import { BasedatosService } from 'src/app/servicios/basedatos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  enable = true;
  nomPagina = "Inicio";

  resultadoHome = 0;

  usuarios: Usuario[] = [];

  serviciosDate = [{
    nombre: 'Desarrollo web',
    descripcion: 'Nosotros realizamos este desarrollamos web',
    autor: 'A'
  },
  {
    nombre: 'Desarrollo mobil',
    descripcion: 'Nosotros realizamos una app',
    autor: 'B'
  }];

   newUser: Usuario = {
    nombre: '',
    id: '',
    sexo: '',
    edad: 0,
    creacion: new Date(),
    servicios: [],
    cedula: ''
  };


  constructor(public basedatosService: BasedatosService) { }

  ngOnInit() {
    // this.basedatosService.saludosBienvenida();
    // this.basedatosService.sumar(10,30);
    // const usuarios = this.basedatosService.cargarUsuario();
    // usuarios.forEach(usuario =>{
    //   usuario.edad++;
    // });
    // console.log('Estos son los usuarios = ',usuarios);
    console.log("Los usuarios--", this.usuarios);
  }

  operacion(event: any) {
    console.log("Capture el evento calcular en Home", event);
    this.resultadoHome = event;
  }

  adUsuario() {
    // console.log('añadir usuario');
    // const newUser = {
    //   nombre: 'Maria',
    //   edad: 40,
    // };

    // this.basedatosService.addUsuario(newUser);
    // const usuarios = this.basedatosService.cargarUsuario();
    // console.log('estos son los usuarios= ',usuarios);

    const newServicio: Servicio = {
      nombre: 'Servico movil',
      precio: 100,
    }

     this.usuarios.push(this.newUser);
    // this.usuarios[0].servicios.push(newServicio);
    // this.usuarios[0].servicios[1].precio = 199;
    // 
    console.log("Usuarios--", this.usuarios);


  }

}
