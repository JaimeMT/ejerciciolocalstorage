import { EmpleadoService } from './../../service/empleado.service';
import { Component } from '@angular/core';
import {Persona} from '../../interface/person.interface';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {


  empleados?: Persona[]; // puede ser nulo

  constructor(private empleadoService: EmpleadoService){

    this.empleados = this.empleadoService.getEmpleados();


  }

}
