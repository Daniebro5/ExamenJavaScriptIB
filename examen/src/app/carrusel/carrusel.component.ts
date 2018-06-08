import { Component, OnInit, Input } from '@angular/core';
import {ServicioAlumnosService} from "../servicio-alumnos/servicio-alumnos.service";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  arregloCarrusel = [];


  constructor(private data: ServicioAlumnosService) { }


  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.arregloCarrusel = mensaje)

  }

  escuela(seleccion){

    switch (seleccion) {
      case 1: {
        return 'https://images.alphacoders.com/863/thumb-1920-86323.jpg';
      }
      case 2: {
        return 'http://paperlief.com/images/captain-america-avengers-age-of-ultron-wallpaper-5.jpg';
      }
      default: {
        break;
      }
    }

  }

}
