import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';
import { addDoc, doc, collection, setDoc } from '@firebase/firestore';
import { uuidv4 } from '@firebase/util';
import { createHash, createPublicKey } from 'crypto';
import { create } from 'domain';
import { setuid } from 'process';
import { identity } from 'rxjs';
import { Item, Usuario } from '../modelos/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  saludar = 'Hola Mundo';
  private usuarios = [
    {
      nombre: 'Juan',
      edad: 10,
    },
    {
      nombre: 'Pedro',
      edad: 20,
    },
    {
      nombre: 'Pablo',
      edad: 30,
    }
  ];

  constructor(private firestore: Firestore) { }

  // saludosBienvenida(){ 
  //   console.log('el mensaje es =',this.saludar)
  // }

  // sumar(num1: number, num2:number){ 
  //   let resultado = 0;
  //   resultado = num1 + num2;
  //   console.log('la suma es: ',resultado);
  // }

  cargarUsuario() {
    return this.usuarios;
  }

  addUsuario(user: any) {
    this.usuarios.push(user);

  }

  deleteUser(pos: number) {
    this.usuarios.splice(pos, 1);
  }

  async crearDocument(item: Item, enlace: string,id: string) {
    try {
      //const data = collection(this.firestore, enlace);
       const data =  await setDoc(doc(this.firestore,enlace, id),item);

      return data;
      //return addDoc(data, item);

    } catch (error) {
       return console.log("Error encontrado: ", error);
    }

  }

  crearID(){
    return uuidv4();
  }

  deleteDocument() {

  }

  getDocument() {

  }

  editDocument() {

  }


}
