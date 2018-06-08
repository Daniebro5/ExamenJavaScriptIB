import {Component, OnInit, Input} from '@angular/core';
import {ServicioAlumnosService} from "../servicio-alumnos/servicio-alumnos.service";


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  mensaje = [];

  alumnoTarjeta = [];

  constructor(private data: ServicioAlumnosService
  ) {
  }

  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje)

  }

  mandarDatos(indice) {

    this.alumnoTarjeta = [];
    this.alumnoTarjeta.push(this.mensaje[indice])
    this.data.cambiarMensaje2(this.alumnoTarjeta)
    this.mostrarElementos()
    /*    console.log(this.alumnoTarjeta)*/
  }

  mostrarElementos() {

    var mostrarFormDetalle = <HTMLFormElement>document.getElementById('formDetalle');
    mostrarFormDetalle.style.display = "block";

    var mostrarBotonLimpiarDetalle = <HTMLFormElement>document.getElementById('botonLimpiarDetalle');
    mostrarBotonLimpiarDetalle.style.display = "block";

    var mostrarTarjeta = <HTMLFormElement>document.getElementById('tarjeta');
    mostrarTarjeta.style.display = "block";

  }


}
