import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string;
  apellidos: string;
  telefono: string;
  email: string;
  password: string;

  constructor() {
    this.nombre = '';
    this.apellidos = '';
    this.telefono = '';
    this.email = '';
    this.password = '';
  }
  onSubmit(): void {

    const usuario = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      telefono: this.telefono,
      email: this.email,
      password: this.password
    };
  }

}
