
export interface Usuario{
    nombre: string;
    apellido?: string;
    id: string;
    sexo: Sexo;
    edad: number;
    creacion: Date;
    servicios: Servicio[];
    cedula: string;
    // compras;
    // likes: Like[];

}
export interface Servicio{
    nombre: string;
    precio: number;
}

export interface Like{
    fecha: Date;
    idUser: string;
    valoracion: number;
}

export interface Item{
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
    descuento: number;
    imagen: string[];
    descripcion: string;
    html?:string;
    id: string;

}

export type Sexo = ''|'Masculino'|'Femenino';
