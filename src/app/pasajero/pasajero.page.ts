import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
  viajesDisponibles = [
    // Ejemplo de datos de viajes disponibles
    {
      fecha: '2023-10-01',
      hora: '10:00',
      asientos: 3,
      destino: 'Ciudad A',
      monto: 50,
      conductor: 'Juan Pérez'
    },
    // Agrega más viajes según sea necesario
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  enviarSolicitud(viaje: any) {
    // Lógica para enviar solicitud
    console.log('Solicitud enviada para el viaje:', viaje);
    alert('Solicitud enviada');
  }

  salir() {
    this.router.navigate(['/conductor-pasajero']);
  }
}
