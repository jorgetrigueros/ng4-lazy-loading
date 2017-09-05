import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './../clientes/cliente-list/cliente-list.component';
import { NuevoClienteComponent } from './../clientes/nuevo-cliente/nuevo-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteListComponent,
  },
  {
    path: 'nuevo',
    component: NuevoClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
