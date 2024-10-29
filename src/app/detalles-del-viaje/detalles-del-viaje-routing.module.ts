import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesDelViajePage } from './detalles-del-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesDelViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesDelViajePageRoutingModule {}
