import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import {FormsModule, NumberValueAccessor} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  registro=[];
  cliente:any;
  id: number;
  nombre: string;
  dui: number;
  nombremasco: string;
  tratamiento: string;
  medicamento: string;
  costo: number;
  contador:number;
  visita:number;
  total:number;
  descuento:number

  constructor() { }

  ngOnInit() {
    this.id = 0;
    this.nombre = '';
    this.dui = 0;
    this.nombremasco = '';
    this.tratamiento = '';
    this.medicamento = '';
    this.costo = 0;
    this.contador = 0;
    this.visita = 0;
    this.total=0;
    this.descuento=0;

  }
  ingresar(){
    if(this.visita >= 2){
      this.descuento = this.costo*0.05;
      this.total = this.costo - this.descuento
    }
    if(this.visita > 4){
      this.descuento = this.costo*0.10;
      this.total = this.costo - this.descuento
    }

  this.cliente={"nombre":this.nombre,"dui":this.dui,"nombremasco":this.nombremasco,"medicamento":this.medicamento,"tratamiento":this.tratamiento,"costo":this.costo,"visita":this.visita,"total":this.total,"descuento":this.descuento};
  this.registro.push(this.cliente);
  this.contador++;

  // function Client(){
  //   if(localStorage.getItem(''))
  // }
  // function localStorageCliente(clista){
  //   localStorage.setItem('Datos',JSON.stringify(clista));
  // }
  // localStorageCliente(this.registro);
  
      
  }
  

}
