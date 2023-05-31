import { Component } from '@angular/core';
import { Persona } from 'src/app/interface/person.interface';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  empleados?: Persona;

  constructor() {};

}
