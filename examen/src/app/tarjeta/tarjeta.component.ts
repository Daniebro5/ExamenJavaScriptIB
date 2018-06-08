import { Component, OnInit } from '@angular/core';
import {ServicioAlumnosService} from "../servicio-alumnos/servicio-alumnos.service";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  tarjeta = [];

  constructor(private data: ServicioAlumnosService) { }

  ngOnInit() {

    this.data.mensajeActual2.subscribe(mensaje => this.tarjeta = mensaje)

  }

  cambiarBolean(estado) {

    if(estado==true){
      return "Si"
    }else{
      return "No"
    }

  }

}
