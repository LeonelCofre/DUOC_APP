import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasajero-viaje',
  templateUrl: './pasajero-viaje.page.html',
  styleUrls: ['./pasajero-viaje.page.scss'],
})
export class PasajeroViajePage implements OnInit {
  solicitud: any = {
    estado: 'pendiente', // puede ser 'aceptada' o 'rechazada'
    detalles: null
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.cargarSolicitud();
  }

  cargarSolicitud() {
    // Reemplaza con el ID de la solicitud actual
    const solicitudId = 1;
    this.http.get(`http://localhost:3000/solicitudes/${solicitudId}`)
      .subscribe((data: any) => {
        this.solicitud = data;
      });
  }

  anularSolicitud() {
    if (confirm('¿Estás seguro de que deseas anular la solicitud?')) {
      this.http.patch(`http://localhost:3000/solicitudes/${this.solicitud.id_solicitud}`, { estado_solicitud: 'Cancelada' })
        .subscribe(() => {
          alert('Solicitud anulada');
          this.router.navigate(['/conductor-pasajero']);
        });
    }
  }

  salir() {
    this.router.navigate(['/conductor-pasajero']);
  }
}
