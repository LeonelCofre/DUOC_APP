import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  emailValido(): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(this.email);
  }

  async registrarse() {
    if (this.nombre.length < 5 || !this.emailValido() || this.password.length < 6) {
      this.presentAlert('Error', 'Por favor, complete todos los campos correctamente.');
      return;
    }

    // Comprobación de existencia
    this.http.get(`http://localhost:3000/usuarios?correo=${this.email}`)
      .pipe(
        catchError(error => {
          this.presentAlert('Error', 'No se pudo conectar al servidor.');
          return of(null);
        })
      )
      .subscribe(async (usuarios: any) => {
        if (usuarios && usuarios.length > 0) {
          this.presentAlert('Error', 'El correo ya está registrado.');
          this.navCtrl.navigateRoot('/iniciar-sesion');
        } else {
          // Creación de registro
          const hashedPassword = bcrypt.hashSync(this.password, 10);
          const nuevoUsuario = { nombre: this.nombre, correo: this.email, password: hashedPassword };

          this.http.post('http://localhost:3000/usuarios', nuevoUsuario)
            .pipe(
              catchError(error => {
                this.presentAlert('Error', 'No se pudo registrar el usuario.');
                return of(null);
              })
            )
            .subscribe(async (response: any) => {
              if (response && response.id) {
                // Crear sesión inicial
                const nuevaSesion = { usuarioId: response.id, fechaInicio: new Date() };
                await this.http.post('http://localhost:3000/sesiones', nuevaSesion).toPromise();

                this.presentAlert('Éxito', 'Registro exitoso.');
                this.navCtrl.navigateRoot('/seleccion-rol');
              } else {
                this.presentAlert('Error', 'No se pudo obtener el ID del usuario.');
              }
            });
        }
      });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
