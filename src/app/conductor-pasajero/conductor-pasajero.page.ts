import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor-pasajero',
  templateUrl: './conductor-pasajero.page.html',
  styleUrls: ['./conductor-pasajero.page.scss'],
})
export class ConductorPasajeroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Método para redirigir a la página "Conductor"
  irAConductor() {
    this.router.navigate(['/conductor']);
  }

  // Método para redirigir a la página "Buscar-viaje"
  irABuscarViaje() {
    this.router.navigate(['/buscar-viaje']);
  }

  // Método para redirigir a la página "home"
  salir() {
    this.router.navigate(['/home']);
  }
}
