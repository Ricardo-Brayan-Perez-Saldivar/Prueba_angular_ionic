import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentesModule } from '../componentes/componentes.module';
import { HeaderComponent } from '../componentes/header/header.component';
import { NewItemComponent } from './new-item/new-item.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactosComponent,
    NewItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule,
    FormsModule,
    ComponentesModule,
  
    
  ],
  exports: []
})
export class PagesModule { }
