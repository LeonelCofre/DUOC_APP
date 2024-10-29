import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorPasajeroPageRoutingModule } from './conductor-pasajero-routing.module';

import { ConductorPasajeroPage } from './conductor-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorPasajeroPageRoutingModule
  ],
  declarations: [ConductorPasajeroPage]
})
export class ConductorPasajeroPageModule {}
