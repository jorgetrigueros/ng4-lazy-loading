import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores-list',
  templateUrl: './proveedores-list.component.html',
  styleUrls: ['./proveedores-list.component.css']
})
export class ProveedoresListComponent implements OnInit {
  private proveedores = [
    'IBM', 'Toshiba', 'Epson', 'Lenovo'
  ];
  constructor() { }

  ngOnInit() {
  }

}
