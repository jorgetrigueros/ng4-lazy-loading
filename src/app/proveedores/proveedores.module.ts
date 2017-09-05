import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresListComponent } from './../proveedores/proveedores-list/proveedores-list.component';

import { ProveedoresRoutingModule } from './proveedores-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProveedoresRoutingModule
  ],
  declarations: [
    ProveedoresListComponent
  ]
})
export class ProveedoresModule { }
