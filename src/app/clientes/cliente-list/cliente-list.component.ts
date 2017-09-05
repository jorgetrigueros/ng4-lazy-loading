import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  private clientes = [
    'Juan Sanchez Martinez', 'Jorge Redondo Santos', 'Lucía Muñoz Gomez'
  ];

  constructor() { }

  ngOnInit() {
  }

}
