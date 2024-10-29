import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage {
  email: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  async iniciarSesion(correo: string, password: string) {
    try {
      // Consultar la tabla Usuario con los datos ingresados
      const usuario = await this.http.post<Usuario>('http://localhost:3000/usuarios/login', { correo, password }).toPromise();

      if (usuario) {
        // Crear una nueva entrada en la tabla Sesion, generando un token único
        const token = this.generarTokenUnico();
        const nuevaSesion = { usuarioId: usuario.id, token, fechaInicio: new Date() };
        await this.http.post('http://localhost:3000/sesiones', nuevaSesion).toPromise();

        this.presentAlert('Éxito', 'Inicio de sesión exitoso.');
        this.router.navigate(['/dashboard']);
      }
    } catch (error) {
      const err = error as { status: number }; // Conversión de tipo
      if (err.status === 404) {
        this.presentAlert('Error', 'El correo no está registrado.');
      } else if (err.status === 401) {
        this.presentAlert('Error', 'Contraseña incorrecta.');
      } else {
        this.presentAlert('Error', 'Ocurrió un error inesperado.');
      }
    }
  }

  generarTokenUnico(): string {
    // Generar un token único (puedes usar una librería o un método propio)
    return Math.random().toString(36).substr(2) + new Date().getTime().toString(36);
  }

  atras() {
    this.router.navigate(['/home']);
  }

  recuperarContrasena() {
    // Lógica para recuperar la contraseña
    console.log("Recuperar contraseña");
  }

  presentAlert(title: string, message: string) {
    // Implementación de la función para mostrar un alerta
    console.log(title, message);
  }
}

interface Usuario {
  id: string; // o el tipo correcto de id
  // otras propiedades si es necesario
}
