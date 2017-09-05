import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './../clientes/cliente-list/cliente-list.component';
import { NuevoClienteComponent } from './../clientes/nuevo-cliente/nuevo-cliente.component';

import { ClientesRoutingModule } from './clientes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  declarations: [
    ClienteListComponent,
    NuevoClienteComponent
  ]
})
export class ClientesModule { }
