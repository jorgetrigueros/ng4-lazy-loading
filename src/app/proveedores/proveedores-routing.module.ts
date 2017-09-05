import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedoresListComponent } from './../proveedores/proveedores-list/proveedores-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProveedoresListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
