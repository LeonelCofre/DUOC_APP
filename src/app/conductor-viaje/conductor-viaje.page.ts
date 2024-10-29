import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor-viaje',
  templateUrl: './conductor-viaje.page.html',
  styleUrls: ['./conductor-viaje.page.scss'],
})
export class ConductorViajePage implements OnInit {
  solicitudes: any[] = [];
  viajeId: number = 1; // Reemplaza con el ID del viaje actual

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.http.get(`http://localhost:3000/solicitudes?estado_solicitud=Pendiente&id_viaje=${this.viajeId}`)
      .subscribe((data: any) => { // Cambiado de any[] a any
        this.solicitudes = data;
      });
  }

  aceptarSolicitud(solicitud: any) {
    this.http.patch(`http://localhost:3000/solicitudes/${solicitud.id_solicitud}`, { estado_solicitud: 'Aceptada' })
      .subscribe(() => {
        this.reducirAsientosDisponibles();
        alert(`Pasajero ${solicitud.nombrePasajero} aceptado.`);
        this.cargarSolicitudes(); // Recargar solicitudes
      });
  }

  reducirAsientosDisponibles() {
    this.http.get(`http://localhost:3000/viajes/${this.viajeId}`)
      .subscribe((viaje: any) => {
        const nuevosAsientos = viaje.asientosDisponibles - 1;
        this.http.patch(`http://localhost:3000/viajes/${this.viajeId}`, { asientosDisponibles: nuevosAsientos })
          .subscribe();
      });
  }

  anularViaje() {
    if (confirm('¿Estás seguro de que deseas anular el viaje?')) {
      this.http.patch(`http://localhost:3000/viajes/${this.viajeId}`, { estado: 'Cancelado' })
        .subscribe(() => {
          alert('Viaje anulado');
          this.router.navigate(['/conductor-pasajero']);
        });
    }
  }

  iniciarViaje() {
    this.http.patch(`http://localhost:3000/viajes/${this.viajeId}`, { estado: 'En curso' })
      .subscribe(() => {
        alert('Viaje iniciado');
      });
  }

  salir() {
    this.router.navigate(['/conductor-pasajero']);
  }
}
