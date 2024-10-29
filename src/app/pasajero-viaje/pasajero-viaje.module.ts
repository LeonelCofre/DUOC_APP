import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasajeroViajePageRoutingModule } from './pasajero-viaje-routing.module';

import { PasajeroViajePage } from './pasajero-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasajeroViajePageRoutingModule
  ],
  declarations: [PasajeroViajePage]
})
export class PasajeroViajePageModule {}
