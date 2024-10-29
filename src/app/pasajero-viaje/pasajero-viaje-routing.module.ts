import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasajeroViajePage } from './pasajero-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: PasajeroViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasajeroViajePageRoutingModule {}
