import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../../services/clientes.service';
import { Router } from '@angular/router';
import { Cliente } from './../../models/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  constructor(private clienteservice: ClientesService, private route: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('cli');
    this.clienteservice.getClientres().subscribe(
      (res) => {
        this.clientes = res;
      }
    );
  }

  OnMostrar(tmp: Cliente): void {
    localStorage.setItem('cli', JSON.stringify(tmp));
    this.route.navigate(['facturas']);
  }
}
