import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CalculadoraComponent,
    FooterComponent,
    FormularioComponent,
    HeaderComponent,
    ServiciosComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  exports: [
    CalculadoraComponent,
    FooterComponent,
    FormularioComponent,
    HeaderComponent,
    ServiciosComponent
  ]
})
export class ComponentesModule { }
