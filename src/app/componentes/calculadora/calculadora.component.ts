import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent  implements OnInit {

  @Input() numero1: number;
  @Input() numero2: number;
  @Output() resultado = new EventEmitter <number>();
  operacion ="suma" ;

  constructor() {
    // console.log("Hola desde el constructor");
    this.numero1=0;
    this.numero2=0;
    // this.resultado=0;
   }

  ngOnInit() {}

  calcular(){
    console.log("Numero 1 = ",this.numero1);
    console.log("Numero 2 = ",this.numero2);

    if(this.operacion === "suma"){
      this.resultado.emit(this.numero1 + this.numero2);
    }
    
    if(this.operacion === "resta"){
      this.resultado.emit(this.numero1 - this.numero2);
    }
    // this.resultado = this.numero1 + this.numero2;
    // console.log("El resultado de (",this.numero1,") + (",this.numero2,") es = (",this.resultado,")");
    console.log("La operacion es: ( ",this.operacion," ).")
  }

}
