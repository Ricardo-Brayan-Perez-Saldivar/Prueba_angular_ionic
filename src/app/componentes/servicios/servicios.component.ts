import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {

  @Input() pageName = '';
  @Input() serviciosEnable = false;
  @Input() servicios = [
    {nombre:'', descripcion:'',autor:''}
  ];

  contactos = [
    {
      nombre:'Juan',
      correo:'juan@gmail.com',
      celular:'1192872634'
    },
    {
      nombre:'Luis',
      correo:'luis@gmail.com',
      celular:'1192872634'
    },
    {
      nombre:'Maria',
      correo:'maria@gmail.com',
      celular:'1192872634'
    },
  ];

  constructor() {
    // this.servicios[0].autor = 'Andres lopez';
    // this.servicios[1].autor = 'Ricardo Brayan';
  }

  ngOnInit() { }

}
