import { Component } from '@angular/core';
import {Persona} from '../../interface/person.interface';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string= '';
  error: string= '';

  constructor(private usuarioService: UsuarioService) { }

  login() {

    const usuariosPermitidos: string[] = [];

    var usuarios = this.usuarioService.getUsuarios();

    for (let i = 0; i < usuarios.length; i++) {
      var usuario =  usuarios[i];
      if (usuario) {
        usuariosPermitidos.push(usuario.nombre);
      }
    }

    // Verificar si el usuario y la contraseña son válidos
    if (usuariosPermitidos.includes(this.username) && this.password === 'admin123') {
    // Inicio de sesión exitoso
    console.log('Inicio de sesión exitoso');
    this.error = ''; // Limpiar el mensaje de error
  } else {
    // Inicio de sesión fallido
    console.log('Inicio de sesión fallido');
    this.error = 'Nombre de usuario o contraseña incorrectos';
  }
  }
}
