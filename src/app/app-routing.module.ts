import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'clientes',
    loadChildren: './clientes/clientes.module#ClientesModule'
  },
  {
    path: 'proveedores',
    loadChildren: './proveedores/proveedores.module#ProveedoresModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
