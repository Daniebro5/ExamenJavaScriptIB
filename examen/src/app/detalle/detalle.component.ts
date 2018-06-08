import {Component, OnInit} from '@angular/core';
import {ServicioAlumnosService} from "../servicio-alumnos/servicio-alumnos.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  formDetalle: FormGroup

  arregloDetalle = []

  arregloTabla = []

  checked: boolean = false

  constructor(private data: ServicioAlumnosService) {

  }

  ngOnInit() {

    this.data.mensajeActual2.subscribe(mensaje => this.arregloDetalle = mensaje)

/*    this.arregloTabla = this.arregloDetalle*/

    this.createForm()

  }

  private createForm() {
    this.formDetalle = new FormGroup({
      materia: new FormControl('', Validators.required),
      codigo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      activo: new FormControl('', Validators.required),
      fechaCreacion: new FormControl('', Validators.required),
      horasPorSemana: new FormControl('', Validators.required),
      estudianteID: new FormControl('', Validators.required)
    });
  }

  agregarDatos(formData) {

    this.arregloDetalle.push(
      {
        'nombre': this.arregloDetalle[0].nombre,
        'apellido': this.arregloDetalle[0].apellido,
        'fechaNacimiento': this.arregloDetalle[0].fechaNacimiento,
        'semestreActual': this.arregloDetalle[0].semestreActual,
        'graduado': this.arregloDetalle[0].graduado,
        'vengador': this.arregloDetalle[0].vengador,
        'detalle': this.arregloDetalle[0].detalle
      })

    this.arregloDetalle[0].detalle.push(
      {
        'materia': formData.value.materia,
        'codigo': formData.value.codigo,
        'descripcion': formData.value.descripcion,
        'activo': formData.value.activo,
        'fechaCreacion': formData.value.fechaCreacion,
        'horasPorSemana': formData.value.horasPorSemana,
        'estudianteID': formData.value.estudianteID
      }
    )

    this.arregloDetalle.splice(0, 1)

    this.arregloTabla.push(this.arregloDetalle)

/*    this.arregloDetalle = [] //Solucion*/

    this.mandarDatos()

    this.resetForm()
  }

  mandarDatos() {

    console.log(this.arregloTabla)

    this.data.cambiarMensaje3(this.arregloTabla)

    this.arregloTabla = [] //Aquiiiiii

    this.mostrarTablaDetalle()

  }

  mostrarTablaDetalle() {

    var mostrarTabla = <HTMLFormElement>document.getElementById('tablaDetalle');
    mostrarTabla.style.display = "block";

  }

  resetForm() {

    var resetForm = <HTMLFormElement>document.getElementById('formDetalle');
    resetForm.reset();
  }


}
