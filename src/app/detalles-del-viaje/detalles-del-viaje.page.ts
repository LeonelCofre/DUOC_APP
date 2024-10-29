import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

declare var google: any; // Añadir esta línea para declarar 'google'

@Component({
  selector: 'app-detalles-del-viaje',
  templateUrl: './detalles-del-viaje.page.html',
  styleUrls: ['./detalles-del-viaje.page.scss'],
})
export class DetallesViajePage implements OnInit {
  viaje: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['viaje']) {
        this.viaje = JSON.parse(params['viaje']);
        this.loadMap();
      }
    });
  }

  loadMap() {
    // Cargar el mapa usando Google Maps API
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
    // Agregar marcador de origen y destino
    new google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map,
      title: 'Origen'
    });
    // Agregar más lógica para el destino...
  }

  enviarSolicitud() {
    // Lógica para enviar solicitud
    alert('Solicitud enviada');
    this.navCtrl.navigateForward('/pasajero-viaje');
  }

  atras() {
    this.navCtrl.navigateBack('/pasajero');
  }
}
