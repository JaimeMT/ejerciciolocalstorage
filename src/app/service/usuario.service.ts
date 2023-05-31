import { Injectable } from '@angular/core';
import { Persona } from '../interface/person.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  setEmpleado(usuario: Persona) {

    let usuarios = [];

    if (localStorage.getItem('usuarios')) {

      usuarios = JSON.parse(localStorage.getItem('usuarios')!);

      usuarios.push(usuario);

      localStorage.setItem('usuarios', JSON.stringify(usuarios))

    }

    if (!localStorage.getItem('usuarios')) {

      console.log(usuario);

      usuarios.push(usuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

    }

  }

  getUsuario(usuarioId: number): Persona {

    return localStorage.getItem('usuarios')![usuarioId] ? JSON.parse(localStorage.getItem('usuarios')!) : null;
  }

  getUsuarios(): Persona[] {

    return localStorage.getItem('usuarios') ? JSON.parse(localStorage.getItem('usuarios')!) : null;

  }

  deleteUsuario(usuarioId: number) {

    let usuarios = [];

    if (localStorage.getItem('usuarios')) {

      usuarios = JSON.parse(localStorage.getItem('usuarios')!);

      const index = usuarios.indexOf(usuarioId, 0);

      if (index > -1) {
        usuarios.splice(index, 1);
      }

      localStorage.setItem('usuarios', JSON.stringify(usuarios))

    }

    if (!localStorage.getItem('usuarios')) {

      usuarios.push(usuarios);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

    }
  }

  updateUsuario(usuarioId: number, usuario: Persona) {

    let usuarios = [];

    if (localStorage.getItem('usuarios')) {

      usuarios = JSON.parse(localStorage.getItem('usuarios')!);

      const index = usuarios.indexOf(usuarioId, 0);

      if (index > -1) {
        usuarios[index] = usuario;
      }

      localStorage.setItem('usuarios', JSON.stringify(usuarios))

    }

    if (!localStorage.getItem('usuarios')) {

      usuarios.push(usuarios);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

    }
  }

}
