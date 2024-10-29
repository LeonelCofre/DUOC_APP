import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesViajePage } from './detalles-del-viaje.page'; // Asegúrate de importar la página

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [DetallesViajePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Añadir esta línea
})
export class DetallesDelViajePageModule {}
