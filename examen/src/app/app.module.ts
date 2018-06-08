import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import {} from "@angular/animations";
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { DetalleComponent } from './detalle/detalle.component';
import {CheckboxModule} from 'primeng/checkbox';
import { TablaDetalleComponent } from './tabla-detalle/tabla-detalle.component';
import {TableModule} from 'primeng/table';
import {ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CarruselComponent,
    ListaAlumnosComponent,
    TarjetaComponent,
    DetalleComponent,
    TablaDetalleComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
    TableModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
