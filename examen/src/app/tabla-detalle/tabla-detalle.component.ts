import { Component, OnInit } from '@angular/core';
import {ServicioAlumnosService} from "../servicio-alumnos/servicio-alumnos.service";

@Component({
  selector: 'app-tabla-detalle',
  templateUrl: './tabla-detalle.component.html',
  styleUrls: ['./tabla-detalle.component.css']
})
export class TablaDetalleComponent implements OnInit {

  datosTabla = [];

  datosAuxiliar = [];


  constructor(private data: ServicioAlumnosService) { }

  ngOnInit() {



    this.data.mensajeActual3.subscribe(mensaje => this.datosTabla = mensaje)

  }

  imprimir(){

    console.log(this.datosTabla)
  }

  cambiarBolean(estado) {

    if(estado==true){
      return "Si"
    }else{
      return "No"
    }

  }


}
