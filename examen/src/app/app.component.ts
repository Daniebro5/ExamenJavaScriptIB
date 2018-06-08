import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  arreglo = [
    {
      nombre:'Juan',
      apellido:'Mendieta',
    },
    {
      nombre:'Diego',
      apellido:'Mendieta',
    },
    {
      nombre:'Maria',
      apellido:'Mendieta',
    }

  ];



}
