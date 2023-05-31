import { Injectable } from '@angular/core';
import { Persona } from '../interface/person.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() { }

  setEmpleado(empleado: Persona) {

    let empleados = [];

    if (localStorage.getItem('empleados')) {

      empleados = JSON.parse(localStorage.getItem('empleados')!);

      empleados.push(empleado);

      localStorage.setItem('empleados', JSON.stringify(empleado))

    }

    if (!localStorage.getItem('empleados')) {

      empleados.push(empleado);
      localStorage.setItem('empleados', JSON.stringify(empleado));

    }

  }

  getEmpleado(empleadoId: number): Persona {

    return localStorage.getItem('empleados')![empleadoId] ? JSON.parse(localStorage.getItem('empleados')!) : null;
  }

  getEmpleados(): Persona[] {

    return localStorage.getItem('empleados') ? JSON.parse(localStorage.getItem('empleados')!) : null;

  }

  deleteEmpleado(empleadoId: number) {

    let empleados = [];

    if (localStorage.getItem('empleados')) {

      empleados = JSON.parse(localStorage.getItem('empleados')!);

      const index = empleados.indexOf(empleadoId, 0);

      if (index > -1) {
        empleados.splice(index, 1);
      }

      localStorage.setItem('empleados', JSON.stringify(empleados))

    }

    if (!localStorage.getItem('empleados')) {

      empleados.push(empleados);
      localStorage.setItem('empleados', JSON.stringify(empleados));

    }
  }

  updateEmpleado(empleadoId: number, empleado: Persona) {

  }

}
