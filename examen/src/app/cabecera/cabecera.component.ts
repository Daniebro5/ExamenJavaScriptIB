import {Component, OnInit, Output} from '@angular/core';
import {ServicioAlumnosService} from "../servicio-alumnos/servicio-alumnos.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  formCabecera: FormGroup;

  mensaje = [];

  constructor(private data: ServicioAlumnosService) {
  }

  arregloDatos = [];

  Vengador = [

    { value: 1, viewValue: 'Ironman'},
    { value: 2, viewValue: 'Capitán América'}

  ];

  semestres = [
    {value: 'Primero', viewValue: 'Primero'},
    {value: 'Segundo', viewValue: 'Segundo'},
    {value: 'Tercero', viewValue: 'Tercero'},
    {value: 'Cuarto', viewValue: 'Cuarto'},
    {value: 'Quinto', viewValue: 'Quinto'},
    {value: 'Sexto', viewValue: 'Sexto'},
    {value: 'Septimo', viewValue: 'Septimo'},
    {value: 'Octavo', viewValue: 'Octavo'}
  ];


  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje)

    this.createForm();
  }

  private createForm() {
    this.formCabecera = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      semestreActual: new FormControl('', Validators.required),
      vengador: new FormControl('', Validators.required),
      graduado: new FormControl('', Validators.required)
    });
  }


  /*  mostrarInformacion(event, formData){
      console.log(event);
      console.log(formData.value);

    }*/

  agregarDatos(formData) {
    this.arregloDatos.push(
      {
        'nombre': formData.value.nombre,
        'apellido': formData.value.apellido,
        'fechaNacimiento': formData.value.fechaNacimiento,
        'semestreActual': formData.value.semestreActual,
        'graduado': formData.value.graduado,
        'vengador': formData.value.vengador,
        'detalle': []
      })

    console.log(this.arregloDatos)

    this.mandarDatos()

    this.resetForm()

    this.mostrarElementos()

    this.ocultarElementos()

  }

  mandarDatos() {

    this.data.cambiarMensaje(this.arregloDatos)
  }

  resetForm() {

    var resetForm = <HTMLFormElement>document.getElementById('formCabecera');
    resetForm.reset();
  }

  ocultarElementos() {

    var ocultarTablaDetalle = <HTMLFormElement>document.getElementById('tablaDetalle');
    ocultarTablaDetalle.style.display = "none";

  }

  mostrarElementos() {

    var mostrarLabelLista = <HTMLFormElement>document.getElementById('labelListaEstudiantes');
    mostrarLabelLista.style.display = "block";

  }

}
