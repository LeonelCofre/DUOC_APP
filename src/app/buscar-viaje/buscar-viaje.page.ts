import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.page.html',
  styleUrls: ['./buscar-viaje.page.scss'],
})
export class BuscarViajePage implements OnInit {
  viajes: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.cargarViajesDisponibles();
  }

  cargarViajesDisponibles() {
    this.http.get<any[]>('http://localhost:3000/viajes?estado=Disponible').subscribe((data: any[]) => {
      this.viajes = data;
    });
  }

  solicitarViaje(viaje: any) {
    const solicitud = {
      id_viaje: viaje.id_viaje,
      id_pasajero: 1, // Reemplaza con el ID del pasajero actual
      fecha_solicitud: new Date().toISOString(),
      estado_solicitud: 'Pendiente'
    };

    this.http.post('http://localhost:3000/solicitudes', solicitud).subscribe(() => {
      alert('Solicitud enviada');
    });
  }

  volver() {
    this.router.navigate(['/conductor-pasajero']);
  }

  verDetalles(viaje: any) {
    // Lógica para manejar la visualización de detalles del viaje
    console.log('Detalles del viaje:', viaje);
  }
}
