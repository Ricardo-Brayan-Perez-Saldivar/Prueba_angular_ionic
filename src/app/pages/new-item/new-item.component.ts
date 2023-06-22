import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Item } from 'src/app/modelos/interfaces';
import { BasedatosService } from 'src/app/servicios/basedatos.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent  implements OnInit {

  newItem: Item = {
    nombre: '',
    precio: 0,
    stock: 0,
    categoria: '',
    descuento: 0,
    imagen: [],
    descripcion: '',
    html:'',
    id: '',

  }
  constructor(private db: BasedatosService,
    private toas: ToastController) { }

  ngOnInit() {}

  async save(){
    
    console.log("Esto se va a guardar: ",this.newItem);
    const data = this.newItem;
    data.id = this.db.crearID();
    const enlace = 'Items';
    await this.db.crearDocument(data,enlace,data.id).then(
      ()=>{
        console.log("Guardado con exito");
        
      }
    );

  }

  mensaje( men: string,tiempo:Time){

    
  }

}
