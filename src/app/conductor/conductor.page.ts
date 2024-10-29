import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  viajeForm: FormGroup;
  today: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.viajeForm = this.fb.group({
      asientos: [1, [Validators.required, Validators.min(1), Validators.max(6)]],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fechaHora: ['', Validators.required],
      monto: [1, [Validators.required, Validators.min(1)]],
    });

    this.today = new Date().toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
  }

  ngOnInit() {}

  programarViaje() {
    if (this.viajeForm.valid) {
      const viaje = {
        ...this.viajeForm.value,
        estado: 'Disponible',
        id_conductor: 1, // Reemplaza con el ID del conductor actual
      };

      this.http.post('http://localhost:3000/viajes', viaje).subscribe(() => {
        alert('Viaje programado');
        this.router.navigate(['/conductor-viaje']);
      });
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  salir() {
    this.router.navigate(['/conductor-pasajero']);
  }
}
