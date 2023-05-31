import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Persona } from 'src/app/interface/person.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  id?: number;
  nombre?: string;
  apellidos?: string;
  telefono?: string;

  constructor(private usuariosService: UsuarioService) {}

  onSubmit(): void {

    let usuario: Persona = {
      id: Math.floor((Math.random() * 1000000) + 1),
      nombre: this.nombre!,
      apellidos: this.apellidos!,
      telefono: this.telefono!,
    };

    this.usuariosService.setEmpleado(usuario);

  }

}
